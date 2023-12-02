import Link from "next/link";
import Layout from "@/components/Layout";
import movies from "../api/movies.json";
import Image from "next/image";

// import useFetchData from "@/hooks/useFetchData";

export default function Films() {
  // const { data, done } = useFetchData(
  //   "https://moviesdatabase.p.rapidapi.com/titles"
  // );
  // console.log("🚀 ~ Films ~ data:", data);

  return (
    <Layout>
      <div
        className="container gap-1 columns-1 md:columns-2 xl:columns-3 2xl:columns-4 mx-auto"
      >
        {movies.map((film) => {
          return (
            <div
              className="relative container w-6/7 h-auto flex flex-col justify-center m-0"
              key={film?.name}
            >
              <Link href={`films-catalog/${film?.id}`}>
                {/* <div className="absolute left-7 top-7 bg-white text-black font-bold p-1 rounded-md z-30">
                {film?.name}
              </div> */}
                {film?.posterUrl ? (
                  <Image
                    key={film?.name}
                    className=" flex justify-center items-start hover:border-2  hover:border-dashed border-red"
                    height={900}
                    width={900}
                    object-cover
                    src={film?.posterUrl}
                    alt="Film main image"
                    onError={(e) => {
                      console.error(
                        `Failed to load image: ${film?.posterUrl}`,
                        e
                      );
                    }}
                  />
                ) : (
                  <Image
                    className=" hover:brightness-110"
                    width={900}
                    height={900}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
                    alt="Film main image"
                  />
                )}
              </Link>
            </div>
            // </Link>
            // </li>
          );
        })}
      </div>
    </Layout>
  );
}

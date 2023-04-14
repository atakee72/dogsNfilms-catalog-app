import Link from "next/link";
import Layout from "@/components/Layout";
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";

export default function Films() {
  const { data, done } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`
  );
  console.log("🚀 ~ Films ~ data:", data);

  return (
    <>
      <Layout>
        <ul className="flex flex-col md:flex-row flex-wrap gap-3 items-center justify-around">
          {done &&
            data?.results?.map((film) => {
              return (
                <li className=" flex flex-column" key={film?.id}>
                  <Link href={`films-catalog/${film?.id}`}>
                    {film?.original_title}
                    {film?.poster_path ? (
                      <img
                        className="h-auto w-48 hover:brightness-110"
                        src={
                          "https://image.tmdb.org/t/p/w500" + film?.poster_path
                        }
                        alt="Film main image"
                      />
                    ) : (
                      <img
                        className="h-auto w-48 hover:brightness-110"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
                        alt="Film main image"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
        </ul>
      </Layout>{" "}
    </>
  );
}

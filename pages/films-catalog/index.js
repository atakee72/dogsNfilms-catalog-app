import Link from "next/link";
import Layout from "@/components/Layout";
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";

export default function Films() {
  const { data, done } = useFetchData(
    "https://moviesdatabase.p.rapidapi.com/titles"
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
                    {film?.titleText?.text}
                    {film?.primaryImage?.url ? (
                      <Image
                        className="h-auto w-48 hover:brightness-110"
                        height={900}
                        width={900}
                        src={film?.primaryImage?.url}
                        alt="Film main image"
                      />
                    ) : (
                      <Image
                        className="h-auto w-48 hover:brightness-110"
                        width={900}
                        height={900}
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

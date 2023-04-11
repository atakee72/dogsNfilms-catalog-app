import Link from "next/link";
import Layout from "@/components/Layout";
import useFetchData from "@/hooks/useFetchData";

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
                      <img
                        className="h-auto w-48 hover:brightness-110"
                        src={film?.primaryImage?.url}
                        alt="Film's main image"
                      />
                    ) : (
                      <img
                        className="h-auto w-48 hover:brightness-110"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
                        alt="Film's main image"
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

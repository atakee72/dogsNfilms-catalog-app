import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import ImageModal from "../../components/ImageModal";

export default function Film() {
  const router = useRouter();
  const { id } = router.query;

  const { data, done } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=de-DE`
  );

  const film = data?.results?.find((film) => film?.id === Number(id));

  console.log("film", film);

  //   const handleRandomDogClick = () => {
  //     const randomIndex = Math.floor(Math.random() * dogs.length);
  //     const randomDog = dogs[randomIndex];
  //     router.push(`/dogs/${randomDog.name}`);
  //   };

  return (
    <Layout>
      <div className="flex justify-center my-9 ">
        <a href="#" onClick={() => router.back()}>
          Back
        </a>
      </div>
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-1 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${film?.backdrop_path})`,
        }}
      >
        {" "}
        <div className="flex flex-col my-5 sm:ml-16 md:ml-32 w-full h-full justify-center items-center">
          <div>
            {film?.poster_path ? (
              <ImageModal
                src={"https://image.tmdb.org/t/p/w500" + film?.poster_path}
                alt="Film main image"
                className="inherit-none"
              />
            ) : (
              <img
                className="h-auto w-48 hover:brightness-110 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
                alt="Film main image"
              />
            )}
          </div>
          {/* <caption className="text-center bg-white text-black">
            Click poster to enlarge
          </caption> */}
        </div>
        <div className="flex flex-col p-5">
          <div className="flex flex-col md:mr-32 my-5 items-start gap-5">
            <div className="text-3xl text-left ">
              {film?.original_title} <br /> <br /> ({film?.release_date})
            </div>

            <div>
              Summary: <br /> {film?.overview}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

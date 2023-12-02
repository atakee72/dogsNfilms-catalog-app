import Layout from "@/components/Layout";
import { useRouter } from "next/router";
// import useFetchData from "@/hooks/useFetchData";
import movies from "../api/movies.json";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";

export default function Film() {
  const router = useRouter();
  const { id } = router.query;

  // const { data, done } = useFetchData(
  //   "https://moviesdatabase.p.rapidapi.com/titles"
  // );

  const film = movies.find((film) => film.id === id);

  console.log("🚀 ~ Film ~ film:", film);


  const handleRandomMovieClick = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    router.push(`/films-catalog/${randomMovie.id}`);
  };

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-between bg-black/40 text-white p-1 max-h-11/12 w-11/12 rounded-full mx-auto px-5 sm:px-12 pb-24 sm:pb-28">
        <div className="text-center my-10 p-1  border-white border-2 mx-auto w-1/12">
          <a href="#" onClick={() => router.back()}>
            Back
          </a>
        </div>
        {film && (
          <div className="container flex flex-col items-center gap-7">
            <div className="text-3xl text-center ">{film?.name}</div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center w-full lg:items-start mb-7 con">
              <div className="flex flex-col items-center justify-between">
                {film?.posterUrl ? (
                  <ImageModal src={film?.posterUrl} alt="Film main image" />
                ) : (
                  <Image
                    className="h-auto w-48 hover:brightness-110 object-cover"
                    width={360}
                    height={360}
                    src={film?.posterUrl}
                    alt="Film poster"
                  />
                )}
                <p className="inline-block text-right bg-white text-black px-2 my-3">
                  Click on the poster to see the image
                </p>
              </div>
              <div className="grid grid-rows-8 gap-3 text-justify place-content-center ml-0 w-fit lg:w-3/12 md:ml-12 xl:ml-24">
                <div>
                  <span className="underline">Year: </span>&emsp;
                  <span className="italic ">{film.year}</span>
                </div>
                <div>
                  <span className="underline">Awards: </span>&emsp;
                  <span className="italic ">This film {film.awards}</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="underline"> Main actor/actress:</span>{" "}
                  <span className="italic ">
                    {film.mainActorsActresses.map((person) => (
                      <div key={person}>{person}</div>
                    ))}
                  </span>
                </div>
                <div className="flexflex-col items-start">
                  <span className="underline">
                    Other famous movies of theirs:{" "}
                  </span>
                  <span className="italic ">
                    {film.examplesOfOtherMovies.map((movie) => (
                      <div key={movie}>{movie}</div>
                    ))}
                  </span>
                </div>
                <div>
                  <span className="underline">Their Awards:</span>{" "}
                  <span className="italic ">
                    {film.awardsForMainActors.map((award) => (
                      <div key={award}>{award}</div>
                    ))}
                  </span>
                </div>
                <div>
                  <span className="italic ">
                    <span className="underline">Summary:</span> <br />
                    {film.movieSummary}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="my-10 py-1 text-center border-white border-2 mx-auto w-2/12">
          <button onClick={handleRandomMovieClick}>Get Random Dog</button>
        </div>
      </div>
    </Layout>
  );
}

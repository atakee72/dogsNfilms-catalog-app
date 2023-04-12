import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import ImageModal from "../../components/ImageModal";

export default function Film() {
  const router = useRouter();
  const { id } = router.query;

  const { data, done } = useFetchData(
    "https://moviesdatabase.p.rapidapi.com/titles"
  );

  const film = data?.results?.find((film) => film?.id === id);

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
      {done && (
        <div className="flex flex-col items-center gap-7">
          <div className="text-3xl ">
            {film?.titleText?.text} - {film?.releaseYear.year}
          </div>
          {film?.primaryImage?.url ? (
            <ImageModal src={film?.primaryImage?.url} alt="Film main image" />
          ) : (
            <img
              className="h-auto w-48 hover:brightness-110 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
              alt="Film main image"
            />
          )}
          <caption className="inline-block text-right bg-white text-black">
            Click to enlarge
          </caption>
          <caption className="text-sm ">
            {film?.primaryImage?.caption.plainText}
          </caption>
        </div>
      )}
    </Layout>
  );
}

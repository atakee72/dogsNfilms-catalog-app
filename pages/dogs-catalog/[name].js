import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import dogs from "../api/dogs.json";

export default function Dog() {
  const router = useRouter();
  const { name } = router.query;
  const dog = dogs.find((dog) => dog.name === name);

  const handleRandomDogClick = () => {
    const randomIndex = Math.floor(Math.random() * dogs.length);
    const randomDog = dogs[randomIndex];
    router.push(`/dogs/${randomDog.name}`);
  };

  return (
    <Layout>
      <div className="flex justify-center my-9 ">
        <a href="#" onClick={() => router.back()}>
          Back
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        {" "}
        <h1 className="justify-self-start text-7xl ">{dog?.name}</h1>
        <div>
          <div>
            <img src={dog?.image} className="h-auto w-96" alt="dog picture" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <p>Age in weeks: &emsp; {dog?.ageInWeeks}</p>
          <p>Breed: &emsp;{dog?.breed}</p>
          <p>Color:&emsp;{dog?.color}</p>
          <p>Sex: &emsp; {dog?.sex}</p>
          <p>Weight: &emsp; {dog?.weight}</p>
        </div>
      </div>
      <div className=" description text-center">
        <div className="my-12">Description:</div>
        <div>
          {dog?.description?.map((item, index) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: item }}></div>
            );
          })}
        </div>

        <div className="my-9 border-slate-100">
          <button onClick={handleRandomDogClick}>Get Random Dog</button>
        </div>
      </div>
    </Layout>
  );
}

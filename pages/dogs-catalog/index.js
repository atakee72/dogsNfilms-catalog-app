import Link from "next/link";
import dogs from "../api/dogs.json";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Dogs() {
  return (
    <Layout>
      <div className="container gap-1 box-content columns-1 xxs:columns-2 sm:md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 mx-auto">
        {dogs.map((dog) => {
          return (
            <div
              className="container w-6/7 h-auto flex flex-col justify-center  items-center m-3 break-inside-avoid-column "
              key={dogs.name}
            >
              <Link
                href={`dogs-catalog/${dog.name}`}
                className="hover:border-2 border-dashed rounded-lg"
              >
                <div className="relative">
                  <p className="bg-[#2A4365] px-1 absolute text-white font-semibold top-3 left-1 text-lg z-10">
                    {dog.name}
                  </p>
                  <Image
                    width={360}
                    height={360}
                    className="h-auto w-48 hover:brightness-110  rounded-tr-lg rounded-tl-lg"
                    src={dog.image}
                    alt="Dog image"
                  />
                </div>
                <div className="bg-white/80 font-semibold text-left text-black p-2 rounded-br-lg rounded-bl-lg overflow-auto h-auto w-48">
                  <p>Age in weeks: {dog?.ageInWeeks}</p>
                  <p>Breed: {dog?.breed}</p>
                  <p>Color:{dog?.color}</p>
                  <p>Sex: {dog?.sex}</p>
                  <p>Weight: {dog?.weight}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

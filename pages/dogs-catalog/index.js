import Link from "next/link";
import dogs from "../api/dogs.json";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Dogs() {
  return (
    <Layout>
      <ul className="text-white font-semibold flex flex-col md:flex-row md:flex-wrap gap-3 items-center justify-around">
        {dogs.map((dog) => {
          return (
            <li key={dogs.name}>
              <Link className="relative" href={`dogs-catalog/${dog.name}`}>
                <p className="absolute top-3 left-1 text-lg z-10">{dog.name}</p>
                <Image
                  width={360}
                  height={360}
                  className="h-auto w-48 hover:brightness-110 hover:border-2 border-dashed rounded-lg"
                  src={dog.image}
                  alt="Dog image"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

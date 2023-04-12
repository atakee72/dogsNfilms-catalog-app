import Link from "next/link";
import dogs from "../api/dogs.json";
import Layout from "@/components/Layout";

export default function Dogs() {
  return (
    <Layout>
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-3 items-center justify-around">
        {dogs.map((dog) => {
          return (
            <li key={dogs.name}>
              <Link href={`dogs-catalog/${dog.name}`}>
                {dog.name}
                <img
                  className="h-auto w-48 hover:brightness-110"
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

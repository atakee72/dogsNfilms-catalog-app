import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";
import graduate from "@/public/graduate.png";
import dalmatians from "@/public/dalmatians.png";

const inter = Inter({ subsets: ["latin"] });

const images = [graduate, dalmatians];

const href = ["films-catalog", "dogs-catalog"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Carousel images={images} href={href} />
    </main>
  );
}

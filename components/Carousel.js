import Link from "next/link";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel({ images, href }) {
  return (
    <div className="w-full text-white text-lg font-bold mx-auto sm:w-9/12 md:w-7/12  px-0 bg-black/50 rounded-3xl ">
      <AliceCarousel
        renderPrevButton={false}
        autoPlay
        animationType="fadeout"
        autoPlayInterval={2000}
        autoPlayStrategy={"all"}
        buttonsDisabled={false}
        controlsStrategy={"responsive"}
        animationEasingFunction={"ease"}
        // keyboardNavigation="Space"
        dotsDisabled={false}
        paddingLeft={0}
        paddingRight={0}
        autoHeight={true}
        swipeExtraPadding={0}
        // autoWidth={true}
        infinite={true}
        items={images.map((image, index) => (
          <div
            key={index}
            className="flex flex-column flex-wrap sm:flex-row mx-5 justify-center items-center -z-50 py-7"
          >
            <Link href={href[index]}>
              <Image
                aspect-square
                object-cover
                width={360}
                height={360}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 px-0 mx-0 rounded-3xl my-3"
              />
            </Link>
          </div>
        ))}
      />
    </div>
  );
}

export default Carousel;

import Image from "next/image";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel({ images, href }) {
  return (
    <div className="w-full mx-0 px-0">
      <AliceCarousel
        autoPlay
        // animationType="fadeout"
        autoPlayInterval={2000}
        autoPlayStrategy={"all"}
        buttonsDisabled={false}
        controlsStrategy={"responsive"}
        // keyboardNavigation="Space"
        dotsDisabled={false}
        paddingLeft={0}
        paddingRight={0}
        // autoHeight={true}
        swipeExtraPadding={0}
        // autoWidth={true}
        infinite={true}
        items={images.map((image, index) => (
          <div
            key={index}
            className="flex flex-column sm:flex-row justify-center items-center space-x-12 -z-50"
          >
            <Link href={href[index]}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="min-w-96 min-h-96 md:w-96 md:h-96 object-fit px-0 mx-0 object-center rounded-3xl"
              />
            </Link>
            <div>
              <Link href={href[index]}>Let us go to the {href[index]}!</Link>
            </div>
          </div>
        ))}
      />
    </div>
  );
}

export default Carousel;

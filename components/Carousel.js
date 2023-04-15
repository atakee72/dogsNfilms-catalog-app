import Image from "next/image";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel({ images, href }) {
  return (
    <div className="w-7/12 mx-0 px-0 bg-slate-900 rounded-3xl ">
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
            className="flex flex-column flex-wrap sm:flex-row justify-center items-center space-x-12 -z-50"
          >
            <div>
              <Link href={href[index]}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-9/12 flex-inherit h-9/12 md:w-96 md:h-96 px-0 mx-0 rounded-3xl my-5"
                />
              </Link>
            </div>
            <div className="my-5">
              <Link href={href[index]}>
                <span className="text-center">
                  Let us go to the {href[index]}!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      />
    </div>
  );
}

export default Carousel;

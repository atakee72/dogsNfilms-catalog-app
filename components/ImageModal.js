import { useState } from "react";
import Image from "next/image";

const ImageModal = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Image
        width={360}
        height={360}
        src={src}
        alt={alt}
        onClick={handleImageClick}
        className="cursor-pointer h-auto w-96 hover:brightness-110"
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={handleImageClick}
          ></div>
          <div className="relative flex flex-col items-center justify-between">
            <Image
              width={360}
              height={360}
              src={src}
              alt={alt}
              className="md:max-w-screen-lg md:max-h-screen-3/4 mx-auto object-cover"
            />
            <caption className="inline-block text-center bg-white text-black">
              Click outside to close
            </caption>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;

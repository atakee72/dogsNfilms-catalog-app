import { useState } from "react";

const ImageModal = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
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
          <div className="relative">
            <img
              src={src}
              alt={alt}
              className="md:max-w-screen-lg md:max-h-screen-3/4 mx-auto"
            />
            <caption className="block text-right">
              Click outside to close
            </caption>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;

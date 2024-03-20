import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative max-w-[320px] overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out transform -translate-x-full" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)`}}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={image}
            className=" max-w-[320px] rounded-md max-h-[320px] object-cover"
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

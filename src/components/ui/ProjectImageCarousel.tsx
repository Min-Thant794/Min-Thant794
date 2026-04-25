import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

const ProjectImageCarousel = ({ images, alt, className }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden ${className ?? "h-72 sm:h-96 lg:h-125"}`}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${alt}-${i}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectImageCarousel;

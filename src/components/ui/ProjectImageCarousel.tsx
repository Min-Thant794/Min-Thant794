import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

const ProjectImageCarousel = ({ images, alt }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-125 w-full overflow-hidden">
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
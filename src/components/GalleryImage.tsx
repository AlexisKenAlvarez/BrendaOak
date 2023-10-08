import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { settings } from "../static";

const GalleryImage = ({  i }: { i: number }) => {

  const [ref, inView] = useInView(settings)

  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={ inView ? { y: 0, opacity: 100 } : {}}
      transition={{
        duration: 1.5,
        ease: [0.16, 0.77, 0.47, 0.97],
      }}
      className="overflow-hidden relative border"
      ref={ref}
    >
      <motion.img
        initial={{ scale: 1.5 }}
        animate={ inView ? { scale: 1 } : {}}
        transition={{
          duration: 1.5,
          ease: [0.16, 0.77, 0.47, 0.97],
        }}
        src={`/gallery/${i}.webp`}
        alt={`Image${i}`}
        className="w-full md:h-[500px] sm:h-[250px] h-[150px] object-cover grayscale"
      />
    </motion.div>
  );
};

export default GalleryImage;

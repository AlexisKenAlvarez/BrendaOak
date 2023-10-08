import { motion } from "framer-motion";

const Hero = () => {
  const navList = [
    {
      title: "About",
      link: "about",
    },
    {
      title: "Gallery",
      link: "gallery",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];

  return (
    <section className="w-full min-h-screen sm:px-10 px-5 py-10 relative font-secondary">
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-black z-10"></div>


      <motion.img
        initial={{ opacity: 0, scale: 0.2, y: "25%" }}
        animate={{ opacity: 100, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 0.77, 0.47, 0.97],
        }}
        src="/hero/Ink2.webp"
        alt="Ink2"
        className="absolute bottom-0 z-20 right-0 lg:w-auto w-44 invert"
      />
      <div className="max-w-[1500px] mx-auto w-full flex md:flex-row flex-col relative z-10">
        <div className="w-full">
          <ul className="flex gap-10 w-fit sm:mx-0 mx-auto">
            {navList.map((items) => (
              <a href={`#${items.link}`} className="" key={items.title}>
                <li className="">{items.title}</li>
              </a>
            ))}
          </ul>
          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.16, 0.77, 0.47, 0.97],
            }}
            src="/hero/Ink1.webp"
            alt="Ink1"
            className="mt-5 sm:mx-0 mx-auto invert"
          />
        </div>
        <div className="sm:w-full w-fit mx-auto sm:mx-0">
          <div className="ml-auto w-fit">
            <h1 className="lg:text-9xl sm:text-7xl text-6xl font-semibold">
              BRENDA
            </h1>
            <div className="flex">
              <h1 className="sm:text-7xl lg:text-9xl text-6xl font-semibold">
                OAK
              </h1>
              <div className="m-4 ml-6">
                <p className="">Tatuaodra</p>
                <p className="">@brendaoak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 p-0 sm:p-5 flex gap-2 sm:gap-4 items-center relative z-10">
        {[...new Array(4)].map((_, i) => (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{
              duration: 1.5,
              ease: [0.16, 0.77, 0.47, 0.97],
              delay: i * 0.1,
            }}
            className={`w-full border overflow-hidden ${
              i % 2 === 0 ? "h-[25rem]" : "h-[20rem]"
            }`}
            key={i}
          >
            <motion.img
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 0.77, 0.47, 0.97],
                delay: i * 0.1,
              }}
              src={`/hero/${i + 1}.webp`}
              alt="Hero Images"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

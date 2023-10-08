const Contact = () => {
  return (
    <footer
      className="w-full h-auto px-5 py-20 font-secondary text-center"
      id="contact"
    >
      <h1 className="font-bold text-5xl">Are you interested?</h1>
      <h1 className="">Reach me through:</h1>

      <div className="mt-10 flex gap-6 justify-center md:flex-row flex-col">
        <a
          href="https://www.instagram.com/brendaoak/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <button className="relative transition-all ease-in-out duration-300 hover:scale-[1.1]">
            <img
              src="/button.webp"
              alt="Button"
              className="select-none w-44 invert"
            />
            <p className="absolute text-black z-10 top-0 left-0 right-0 bottom-0 m-auto h-fit">
              Instagram
            </p>
          </button>
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=5521977236909&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <button className="relative transition-all ease-in-out duration-300 hover:scale-[1.1]">
            <img
              src="/button.webp"
              alt="Button"
              className="select-none w-44 invert"
            />
            <p className="absolute text-black z-10 top-0 left-0 right-0 bottom-0 m-auto h-fit">
              WhatsApp
            </p>
          </button>
        </a>

        <button className="relative transition-all ease-in-out duration-300 hover:scale-[1.1] text-black md:mx-0 w-fit mx-auto">
          <img
            src="/button.webp"
            alt="Button"
            className="select-none w-44 invert"
          />
          <p className="absolute text-black z-10 top-0 left-0 right-0 bottom-0 m-auto h-fit text-sm">
            +55 21 97723-6909
          </p>
        </button>
      </div>
    </footer>
  );
};

export default Contact;


export const metadata = {
  title: "Tegar Arsya",
  description:
    "Tegar Arsya",
};

export default function Home() {
  return (
    <div>
      <div className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
        <p
          className="ml-1 hidden pb-3 text-sm text-black md:block md:pb-7 md:text-base"
          data-aos="fade-up"
        >
          Hi, my name is
        </p>
        <h1
          className="pb-1 text-4xl font-semibold text-black md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Tegar Arsyadani.
        </h1>
        <h1
          className="pb-4 text-4xl font-semibold text-green-500 md:pb-8 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          I build things for the web and apps.
        </h1>
        <p
          className="w-full text-sm leading-relaxed text-black md:w-[540px] md:text-base"
          data-aos="zoom-in-up"
        >
          I am a web programmer and mobile developer. my experience in making web is with php, but i'm learning to use react and laraverel.
          and for mobile developers my experience is to make applications with java. but I'm also learning to use flutter and dart.
        </p>
        <div
          className="mt-10 text-sm md:mt-14"
          data-aos="flip-up"
          data-aos-duration="600"
        >
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center py-24 text-center ">
        <div className="z-40 mb-0 md:mb-10">
          <h2
            className="pb-2 text-3xl font-bold leading-tight text-black md:pb-0 md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed"
            data-aos="zoom-in-up"
            data-aos-duration="300"
          >
            Delivering modern,
            <br />
            cohensive & instuitive web solution.
          </h2>
          <p
            className="text-sm text-green-500 md:text-base"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            I enjoy designing meaningful experiences for brands & businesses to
            help them serve their target users.
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import ulin from "@images/tg.jpg";
import { tools, stacks } from "@/utils/datas";
import CardAbout from "@/components/card/card-about";

export const metadata = {
  title: "About | Tegar Arsyadani",
  description:
    "About Ulinnaja Aldi | Hello! My real name is Aldilla Ulinnaja, an Informatics Engineering student interested and experienced in web development, UI design, and 3D modeling.",
};

export default function About() {
  return (
    <section>
      <div className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
        <div className="flex flex-col justify-center text-black">
          <div className="flex items-center gap-5 pb-10">
            <h1
              className="text-xl font-semibold text-green-500 lg:text-2xl"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              About Me
            </h1>
            <div
              className="h-[1px] w-32 bg-primary md:w-96"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
          </div>
          <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
            <p data-aos="zoom-in-right">
            Hello! My real name is Tegar Arsyadani, an Informatics Engineering student who is interested and experienced in 
            Web Development and mobile application development, specializing in {" "}
              <span className="text-green-500">Frontend Development</span> using
              JavaScript and mobile using dart.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="100">
            As an Informatics Engineering student, I have strong knowledge and skills in Web programming, mobile programming and UI Design. 
            I have the ability to create user-friendly and visually appealing websites and applications.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="200">
            I always try to improve my skills and knowledge. I believe that ongoing training and personal projects are the keys to success. 
            I am committed to staying up-to-date with the latest developments in my field and continuously expanding my knowledge and skills.
            </p>
          </div>
        </div>
        <div
          className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          <div className="grayscale transition-all duration-500 hover:grayscale-0">
            <Image
              src={ulin}
              alt="ulin"
              height={1000}
              className="scale-50 lg:scale-100 2xl:scale-75"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 pb-12">
          <div
            className="h-[1px] w-12 bg-black"
            data-aos="zoom-in-right"
            data-aos-duration="300"
            data-aos-once="true"
          ></div>
          <h1
            className="text-xl font-semibold text-green-500 md:text-2xl"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-once="true"
          >
            Tech stack
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
          {Object.keys(stacks).map((stack, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index}00`}
              data-aos-duration="300"
              data-aos-once="true"
            >
              <CardAbout
                src={stacks[stack].src}
                name={stacks[stack].name}
                level={stacks[stack].level}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 pb-12">
          <div
            className="h-[1px] w-12 bg-black"
            data-aos="zoom-in-right"
            data-aos-duration="300"
            data-aos-once="true"
          ></div>
          <h1
            className="text-xl font-semibold text-green-500 md:text-2xl"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-once="true"
          >
            Tools used
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
          {Object.keys(tools).map((tool, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index}00`}
              data-aos-duration="300"
              data-aos-once="true"
            >
              <CardAbout
                src={tools[tool].src}
                name={tools[tool].name}
                level={tools[tool].level}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

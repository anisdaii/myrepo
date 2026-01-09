// @flow strict
import Image from "next/image";
import GlowCard from "../../helper/glow-card";

const certifications = [
  {
    id: 1,
    name: "Cybersecurity Threat Landscape",
    image: "/certif 1.png"
  },
  {
    id: 2,
    name: "Fundamentals of Deep Learning",
    image: "/certif 2.png"
  },
  {
    id: 3,
    name: "Ethical Hacking",
    image: "/certif 3.png"
  }
];

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 py-8">
        {certifications.map((certification) => (
          <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
            <div className="p-6 relative text-white flex flex-col items-center">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-4 w-full h-48 relative rounded-lg overflow-hidden">
                  <Image
                    src={certification.image}
                    alt={certification.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-base sm:text-xl font-medium uppercase text-center">
                  {certification.name}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}

export default Certifications;



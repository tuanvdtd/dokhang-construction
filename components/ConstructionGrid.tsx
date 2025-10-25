import Image from "next/image";
import Link from "next/link";
import { Building2, Home, House, Ruler } from "lucide-react";
import projects from "@/data/projects.json";

const services = [
  { icon: Building2, title: "THI CÔNG TRỌN GÓI" },
  { icon: Home, title: "THIẾT KẾ BIỆT THỰ" },
  { icon: House, title: "THIẾT KẾ NHÀ PHỐ" },
  { icon: Ruler, title: "THIẾT KẾ NỘI THẤT" },
];

export default function ConstructionGrid() {
  return (
    <>
    <section className="bg-[#24507a] text-white py-15 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 relative inline-block">
          DỊCH VỤ CỦA CHÚNG TÔI
          <span className="block w-16 h-[2px] bg-white mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center mt-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-2 border-white mb-4">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  <div className="absolute w-24 h-24 rounded-full border-2 border-dashed border-white opacity-60"></div>
                </div>
                <p className="text-sm md:text-base font-medium">{service.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl text-[#1e73be] cursor-pointer hover:text-black font-bold pt-8 uppercase inline-block :after:content-[''] after:block after:w-[50%] hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:bg-[#3498db] hover:after:bg-black after:mx-auto after:mt-4 ">
        THI CÔNG CHỌN GÓI
      </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8">
          {projects.map((item, index) => (
            <Link
              key={index}
              href={`/san-pham/${item.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl shadow-md w-full relative" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center mt-3 text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

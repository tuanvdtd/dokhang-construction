import ConstructionGrid from "@/components/ConstructionGrid";
import CarouselHero from "./HeroSection";
import { Col, Row } from 'antd';
import Image from "next/image";
import CompanyIntro from "@/components/CompanyIntro";

export default function App() {

  return (
    <>
    <CarouselHero />
    <CompanyIntro />
    <ConstructionGrid />
    <div className="w-full bg-[#d3d3d3] text-center pb-10">
      <h1 className="text-3xl text-[#1e73be] hover:text-black font-bold  pt-8 uppercase inline-block :after:content-[''] after:block after:w-[50%] hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:bg-[#3498db] hover:after:bg-black after:mx-auto after:mt-4 ">
        Quy trình làm việc của chúng tôi
      </h1>
      <div className="flex justify-center items-center mt-10 px-4">
        <Row gutter={[24, 24]} className="w-full max-w-6xl items-stretch">
          <Col xs={24} sm={24} md={12} lg={8} >
            <div className="card flex flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-lg w-full h-full">
              <div className="relative w-[50%]" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/logo1.png"
                  alt="Thi công phần thô và hoàn thiện"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col items-start text-left space-y-2 flex-1">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Giai đoạn 1</span>
                </div>

                <h2 className="text-lg font-bold text-gray-800 leading-snug">
                  THIẾT KẾ <br />
                  <span className="text-gray-700">KIẾN TRÚC &amp; NỘI THẤT</span>
                </h2>
                <a href="https://zalo.me/0123456789" target="_blank"
                  rel="noopener noreferrer">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 shadow-md">
                    Báo giá &gt;&gt;&gt;
                  </button>
                </a>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <div className="card flex flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-lg w-full h-full">
              <div className="relative w-[50%]" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/logo1.png"
                  alt="Thi công phần thô và hoàn thiện"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col items-start text-left space-y-2 flex-1">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Giai đoạn 2</span>
                </div>

                <h2 className="text-lg font-bold text-gray-800 leading-snug">
                  THI CÔNG <br />
                  <span className="text-gray-700">PHẦN THÔ &amp; HOÀN THIỆN</span>
                </h2>

                <a href="https://zalo.me/0123456789" target="_blank"
                  rel="noopener noreferrer">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 shadow-md">
                    Báo giá &gt;&gt;&gt;
                  </button>
                </a>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={{ span: 12, offset: 6}} lg={{ span: 8, offset: 0 }}>
            <div className="card flex flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-lg w-full h-full">
              <div className="relative w-[50%]" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/logo1.png"
                  alt="Thi công phần thô và hoàn thiện"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col items-start text-left space-y-5 flex-1">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Giai đoạn 3</span>
                </div>

                <h2 className="text-lg font-bold text-gray-800 leading-snug">
                  THI CÔNG NỘI THẤT
                </h2>

                <a href="https://zalo.me/0123456789" target="_blank"
                  rel="noopener noreferrer">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 shadow-md">
                    Báo giá &gt;&gt;&gt;
                  </button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
}

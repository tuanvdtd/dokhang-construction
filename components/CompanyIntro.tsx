import Image from "next/image";

export default function CompanyIntro() {
  return (
    <section className="bg-white text-[#2c3e50] px-6 md:px-12 lg:px-24 py-10 lg:py-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* --- Left Content --- */}
        <div>
          <h1 className="text-6xl md:text-8xl font-bold leading-snug uppercase mb-4">Hà Nội</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            “Xây Giá Trị - Dựng Tương Lai”
          </h2>
          <p className="text-base text-[#95a5a6] leading-relaxed mb-10">
            Những đường nét song song hướng lên trên tạo ra những mảng sáng tối cân bằng và đối xứng về hai phía. 
            Ý nghĩa về một sự phát triển bền vững, cân bằng và hiệu quả về mặt lợi ích đồng đều cho các bên. 
            Đây chính là yếu tố làm nên một Do Khang Contruction bền vững hướng tới tương lai. 
            Cân bằng lợi ích và trách nhiệm (Dù đó là nội bộ, đối tác, khách hàng hay xã hội...).
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <p className="text-4xl md:text-5xl font-bold">500+</p>
              <p className="text-yellow-400 font-semibold">Nhân Sự</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">10+</p>
              <p className="text-yellow-400 font-semibold">Năm Hoạt Động</p>
            </div>
          </div>
        </div>

        {/* --- Right Image (SVG map) --- */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/S.svg"
            alt="Vietnam Map"
            width={700}
            height={700}
            className="w-full max-w-[400px] lg:max-w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

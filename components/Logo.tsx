import Image from "next/image";
import Link from "next/link";

const Logo = ({className='', width=70, height=70}) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {/* Biến ảnh tối màu thành trắng (ngược lại nếu bỏ invert). */}
      <Image src="/logo1.png" alt="logo" width={width} height={height} className="brightness-0 invert" />
    </Link>
  );
};

export default Logo;
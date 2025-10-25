'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import "./heroSection.css";

interface SlideInfo {
  title: string;
  text: string;
}

const slideImages: string[] = [
  "https://vnn-imgs-a1.vgcloud.vn/afamilycdn.com/150157425591193600/2020/5/3/3-15884900653311493149253-0-0-1250-2000-crop-15884905337861134386203.jpg",
  "https://cdn.pixabay.com/photo/2024/06/04/01/36/urban-8807675_1280.png",
  "https://kitos.com.vn/wp-content/uploads/2019/12/thiet-ke-noi-that-chung-cu15.jpg",
  "https://noithataihome.vn/wp-content/uploads/2020/10/Thiet-ke-noi-that-nha-cap-4-co-gac-lung.jpg",
  "https://noithatmanhhe.vn/media/21771/12-vach-cnc-sang-trong-noi-that-manh-he.jpg",
  "https://weo.vn/datafiles/images/CANHO-3PHONGNGU-HIMLAM-8.jpg",
  "https://noithatmanhhe.vn/media/23768/11tong-quan-khong-gian-phong-lam-viec.jpg"
];

const slideInfo: SlideInfo[] = [
  {
    title: "Carnaval",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis, erat odio dapibus nisl, a faucibus mauris risus eu metus. Vivamus et metus vel diam luctus sodales. Donec non dui nec lorem tincidunt tempor. Suspendisse potenti. Curabitur ac nibh quis erat fermentum laoreet. Nulla facilisi. Aenean et nisi sit amet nibh laoreet feugiat. Aliquam erat volutpat. Morbi tristique, sapien nec hendrerit luctus, elit turpis dapibus ligula, id iaculis tortor nunc non neque."
  },
  {
    title: "Ciudad mágica",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis, erat odio dapibus nisl, a faucibus mauris risus eu metus. Vivamus et metus vel diam luctus sodales. Donec non dui nec lorem tincidunt tempor. Suspendisse potenti. Curabitur ac nibh quis erat fermentum laoreet. Nulla facilisi. Aenean et nisi sit amet nibh laoreet feugiat. Aliquam erat volutpat. Morbi tristique, sapien nec hendrerit luctus, elit turpis dapibus ligula, id iaculis tortor nunc non neque."
  },
  {
    title: "Ciudad neón",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis, erat odio dapibus nisl, a faucibus mauris risus eu metus. Vivamus et metus vel diam luctus sodales. Donec non dui nec lorem tincidunt tempor. Suspendisse potenti. Curabitur ac nibh quis erat fermentum laoreet. Nulla facilisi. Aenean et nisi sit amet nibh laoreet feugiat. Aliquam erat volutpat. Morbi tristique, sapien nec hendrerit luctus, elit turpis dapibus ligula, id iaculis tortor nunc non neque."
  },
  {
    title: "Bosque",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis, erat odio dapibus nisl, a faucibus mauris risus eu metus. Vivamus et metus vel diam luctus sodales. Donec non dui nec lorem tincidunt tempor. Suspendisse potenti. Curabitur ac nibh quis erat fermentum laoreet. Nulla facilisi. Aenean et nisi sit amet nibh laoreet feugiat. Aliquam erat volutpat. Morbi tristique, sapien nec hendrerit luctus, elit turpis dapibus ligula, id iaculis tortor nunc non neque."
  },
  {
    title: "Nave",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis, erat odio dapibus nisl, a faucibus mauris risus eu metus. Vivamus et metus vel diam luctus sodales. Donec non dui nec lorem tincidunt tempor. Suspendisse potenti. Curabitur ac nibh quis erat fermentum laoreet. Nulla facilisi. Aenean et nisi sit amet nibh laoreet feugiat. Aliquam erat volutpat. Morbi tristique, sapien nec hendrerit luctus, elit turpis dapibus ligula, id iaculis tortor nunc non neque."
  },
  {
    title: "Ciudad futurista",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis, erat odio dapibus nisl, a faucibus mauris risus eu metus. Vivamus et metus vel diam luctus sodales. Donec non dui nec lorem tincidunt tempor. Suspendisse potenti. Curabitur ac nibh quis erat fermentum laoreet. Nulla facilisi. Aenean et nisi sit amet nibh laoreet feugiat. Aliquam erat volutpat. Morbi tristique, sapien nec hendrerit luctus, elit turpis dapibus ligula, id iaculis tortor nunc non neque."
  },
  {
    title: "Espacio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis, erat odio dapibus nisl, a faucibus mauris risus eu metus. Vivamus et metus vel diam luctus sodales. Donec non dui nec lorem tincidunt tempor. Suspendisse potenti. Curabitur ac nibh quis erat fermentum laoreet. Nulla facilisi. Aenean et nisi sit amet nibh laoreet feugiat. Aliquam erat volutpat. Morbi tristique, sapien nec hendrerit luctus, elit turpis dapibus ligula, id iaculis tortor nunc non neque."
  }
];

const size = 65;

function getSlideTransform(position: number) {
  const radius = (size / 2) - 10; // Thêm 0.5rem để slide nằm trên border thay vì bên trong
  const angle = position * 47 + 147;
  const scale = position === 0 ? 5 : position === -1 || position === 1 ? 3 : 1;
  return `rotate(${angle}deg) translateY(${radius}rem) rotate(${-angle}deg) scale(${scale})`;
}

export function CarouselHero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slidesCount = slideImages.length;
  const isAnimatingRef = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_PLAY_INTERVAL = 5000;

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayTimerRef.current = setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % slidesCount);
    }, AUTO_PLAY_INTERVAL);
  }, [stopAutoPlay, slidesCount]);

  const moveToSlide = (target: number) => {
    if (isAnimatingRef.current) return;
    if (target === currentSlide) return;

    stopAutoPlay();
    isAnimatingRef.current = true;
    const diff = (target - currentSlide + slidesCount) % slidesCount;
    const step = diff > slidesCount / 2 ? -1 : 1;
    let current = currentSlide;

    const animate = () => {
      current = (current + step + slidesCount) % slidesCount;
      setCurrentSlide(current);

      if (current !== target) {
        timerRef.current = setTimeout(animate, 300);
      } else {
        isAnimatingRef.current = false;
      }
    };

    animate();
  };

  const handleLeft = () => {
    stopAutoPlay();
    moveToSlide((currentSlide - 1 + slidesCount) % slidesCount);
  };

  const handleRight = () => {
    stopAutoPlay();
    moveToSlide((currentSlide + 1) % slidesCount);
  };

  const computeOffset = (index: number) => {
    let offset = (index - currentSlide + slidesCount) % slidesCount;
    if (offset > slidesCount / 2) {
      offset -= slidesCount;
    }
    return offset;
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      stopAutoPlay();
      isAnimatingRef.current = false;
    };
  }, [startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    if (!isAnimatingRef.current) {
      startAutoPlay();
    }
  }, [currentSlide, startAutoPlay]);

  const visiblePositions = [-2, -1, 0, 1, 2];

  return (
    // <section className="text-[62.5%]">
    <div
      className="slideshow"
      id="slideshow"
      style={{ backgroundImage: `url(${slideImages[currentSlide]})` }}
    >
      <div className="carousel-container hidden xl:block">
        <div className="carousel" id="carousel">
          {slideImages.map((img, i) => {
            const offset = computeOffset(i);
            const visible = visiblePositions.includes(offset);
            const style = visible
              ? {
                  display: "block",
                  transform: getSlideTransform(offset),
                  opacity: "1",
                  backgroundImage: `url(${img})`
                }
              : {
                  display: "none",
                  opacity: "0",
                  backgroundImage: `url(${img})`
                };

            return (
              <div
                key={i}
                className="slide"
                style={style}
                aria-hidden={!visible}
                role="img"
                aria-label={slideInfo[i].title}
              />
            );
          })}
        </div>
      </div>

      <div className="arrow-controls">
        <button className="arrow left" aria-label="Anterior" onClick={handleLeft}>
          &lt;
        </button>
        <button className="arrow right" aria-label="Siguiente" onClick={handleRight}>
          &gt;
        </button>
      </div>
    </div>
    // </section>
  );
}


export default CarouselHero;

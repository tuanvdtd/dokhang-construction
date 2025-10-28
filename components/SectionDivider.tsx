export function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      {/* Parallax Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #f97316 0px,
            #f97316 2px,
            transparent 2px,
            transparent 10px
          )`,
          transform: 'translateZ(0)',
        }}
      ></div>
      
      {/* Horizontal Line with Gradient */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
      
      {/* Decorative Dots */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}

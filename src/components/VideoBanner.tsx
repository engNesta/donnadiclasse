
const VideoBanner = () => {
  return (
    <div className="relative w-full h-[40vh] overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        onLoadedMetadata={(e) => {
          const video = e.target as HTMLVideoElement;
          video.playbackRate = 0.4;
        }}
      >
        <source src="https://i.imgur.com/u5kBjCy.mp4" type="video/mp4" />
        Din webbläsare stöder inte videotaggen.
      </video>
      {/* Add a semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      
      {/* Add centered overlay text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Våra Kollektioner
        </h1>
      </div>
      
      {/* Add D.D.C. text overlay */}
      <div className="absolute bottom-4 right-4">
        <h1 className="text-lg md:text-xl lg:text-2xl font-playfair font-bold text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          <span className="text-italian-green">D.</span>{" "}
          <span className="text-soft-white">D.</span>{" "}
          <span className="text-italian-red">C.</span>
        </h1>
      </div>
    </div>
  );
};

export default VideoBanner;

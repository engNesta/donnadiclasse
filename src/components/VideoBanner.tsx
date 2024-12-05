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
      >
        <source src="/IntroVideo.mp4" type="video/mp4" />
        Din webbläsare stöder inte videotaggen.
      </video>
      {/* Add a semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
};

export default VideoBanner;
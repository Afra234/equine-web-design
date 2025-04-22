const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover filter blur-sm"
      >
        <source src="/videos/Untitled design.mp4" type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/80 to-[#0A0A0A] z-10"></div>
    </div>
  );
};

export default VideoBackground;
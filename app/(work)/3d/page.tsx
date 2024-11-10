const page = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <video controls className="max-w-7xl w-full" playsInline>
        <source src="/videos/ShowReel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3 className="text-[#b0b0b0] text-xl font-thin mt-6">3D SHOWREEL</h3>
    </div>
  );
};

export default page;

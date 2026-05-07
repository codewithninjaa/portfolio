

function Hero() {
  return (
    <section className="min-h-screen bg-yellow-400 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl bg-[#f3f3f7] rounded-3xl overflow-hidden grid md:grid-cols-2 relative">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 z-10">
          <p className="text-yellow-500 font-semibold uppercase tracking-wide mb-4">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black mb-6">
            Hi, I'm Nikita Kumari
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            I’m a passionate developer who loves building modern, responsive, and user-friendly web experiences. I enjoy turning ideas into clean, functional products while continuously growing toward becoming a full stack developer.
          </p>

          <div className="flex gap-4">
            <button
  onClick={() =>
    window.open("/Nikitaakumarii.pdf", "_blank", "noopener,noreferrer")
  }
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
>
  Resume
</button>

            <button
  onClick={() =>
    window.open(
      "https://github.com/codewithninjaa",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
>
  Github
</button>
          </div>
        </div>

        {/* Right Side */}
        {/* <div className="bg-yellow-400 flex items-center justify-center relative">
          <img
            src={profile}
            alt="Nikita"
            className="w-[80%] max-w-md object-contain"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;


function Hero() {
  return (
    <section id="About" className="flex items-center w-full h-[calc(100dvh-4rem)] pb-50 bg-gray-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Next Favorite Sound
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Stream trending tracks, explore new artists, and build playlists that match your vibe.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="px-8 py-3 bg-indigo-600 rounded-2xl text-lg font-medium shadow-lg
                    hover:bg-indigo-700 transition-colors duration-200 ">
            My Music
          </button>
          <button 
            className="px-8 py-3 border-blue-700 border rounded-2xl text-lg font-medium shadow-lg
                    hover:bg-gray-200 transition-colors duration-200 ">
            Contact Me
          </button>
        </div>
      </div>
    </section>

  )
}

export default Hero


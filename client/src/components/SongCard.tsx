import { useRef, useState, useEffect } from "react"

type Song = {
  _id: string
  title: string
  description: string
  releaseDate: string
  audioFile: {
    asset: {
      url: string
    }
  }
}

type SongCardProps = {
  song: Song
}

function SongCard({ song }: SongCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // update current time while playing
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const setAudioData = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", setAudioData)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", setAudioData)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const time = Number(e.target.value)
    audio.currentTime = time
    setCurrentTime(time)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0")
    return `${minutes}:${seconds}`
  }

  return (
    <div className="p-5 m-4 bg-white rounded-xl shadow w-96">

      <h2 className="text-lg font-bold">{song.title}</h2>

      <p className="text-sm text-gray-600 mb-3">{song.description}</p>

      <audio ref={audioRef} src={song.audioFile.asset.url} />

      {/* play button */}
      <button
        onClick={togglePlay}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-3"
      >
        {playing ? "Pause" : "Play"}
      </button>

      {/* progress bar */}
      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="w-full"
      />

      {/* timer */}
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

    </div>
  )
}

export default SongCard

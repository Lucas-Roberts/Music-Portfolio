import { useEffect } from "react"

import '@arraypress/waveform-player/dist/waveform-player.css'
import '@arraypress/waveform-player'

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

  // initialize waveform player after React renders
  useEffect(() => {
    const player = (window as any).WaveformPlayer

    if (player && typeof player.init === "function") {
      player.init()
    }
  }, [])

  return (
    <div className="p-5  bg-gray- border-2 rounded-xl shadow w-250">

      <h2 className="text-lg font-bold">{song.title}</h2>

      <p className="text-sm text-gray-600 mb-3">{song.description}</p>

      <div
        key={song._id}
        data-waveform-player
        data-url={song.audioFile.asset.url}
        data-waveform-style="mirror"
        data-bar-width="1"
        data-bar-spacing="0.5"
        data-samples="500"
        data-height="100"
        data-waveform-color="rgba(0,0,0,0.3)"
        data-progress-color="rgba(131,122,255,0.9)"
        data-button-color="rgba(0,0,0,0.9)"
        data-title=" "
      />

    </div>
  )
}

export default SongCard

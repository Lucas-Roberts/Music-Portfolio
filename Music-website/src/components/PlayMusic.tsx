import React from 'react'
import { useState } from 'react';

function PlayMusic({ title = "Track Title", audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white rounded-2xl shadow-xl p-6 mt-10">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          {isPlaying ? (
            <span className="text-lg font-bold">❚❚</span>
          ) : (
            <span className="text-lg font-bold">▶</span>
          )}
        </button>

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>

          <div className="w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
            <div className="bg-indigo-500 h-2 w-1/3" />
          </div>
        </div>
      </div>

      {audioSrc && (
        <audio className="hidden" src={audioSrc} />
      )}
    </div>
  );
}


export default PlayMusic

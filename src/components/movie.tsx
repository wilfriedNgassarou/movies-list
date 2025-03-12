import { useState } from "react";
import { Movie } from "../constants/movies";
import { formatTime } from "../utils/formatTime";
import { motion } from "motion/react";

interface Props {
  movie: Movie
}

export function MovieItem ({ movie }: Props) {
  const [isSaved, setisSaved] = useState(false)

  let text = ''

  if(movie.seasonsCount) text = `${movie.seasonsCount} ${movie.seasonsCount > 1 ? 'Seasons' : 'Season'}`
  if(movie.durationInSeconds) text = formatTime(movie.durationInSeconds)

  return (
    <div className="w-60 h-72 group hover:w-[420px] cursor-default duration-300 ease-in-out rounded-2xl relative overflow-hidden">
      <img
        src={movie.cover}
        className="w-full h-80 object-cover"
        alt={`${movie.title} cover`}
      />
      <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 duration-200 ease-out" />
      <div
        className="absolute inset-0 px-4 py-6 opacity-0 group-hover:opacity-100 duration-300 ease-out text-white flex flex-col justify-end"
      >

        <span
          onClick={() => setisSaved(!isSaved)} 
          className="absolute top-6 right-4 cursor-pointer"
        >
          <motion.svg
            width="32"
            height="32"
            fill={isSaved ? 'white' : 'none'}
            animate={{ rotate: isSaved ? [0, 10, -10, 15, -15, 15, -15, 0 ] : 0 }}
            whileTap={{ scale: 1.2 }}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="outline-none"
            viewBox="0 0 24 24"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </motion.svg>
        </span>
        <h2
          className="whitespace-nowrap font-semibold text-4xl"
        >
          {movie.title}
        </h2>
        <p className="text-lg whitespace-nowrap">
          {movie.releaseYear} · {movie.platform} · {text}
        </p>
        <div className="mt-8">
          <button 
            className="bg-black px-4 py-2 rounded-full text-lg inline-flex gap-2 justify-center items-center"
          >
            Watch
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
import React from 'react';

type Movie = {
  id?: string | number;
  title: string;
  year?: string | number;
  poster?: string;
  overview?: string;
};

const MovieCard: React.FC<{ movie: Movie; onClick?: () => void }> = ({ movie, onClick }) => {
  return (
    <article onClick={onClick} className="max-w-xs rounded overflow-hidden shadow hover:shadow-md cursor-pointer">
      {movie.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
      ) : (
        <div className="w-full h-64 bg-gray-100 flex items-center justify-center">No Image</div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{movie.title}</h3>
        {movie.year && <p className="text-sm text-gray-500">{movie.year}</p>}
        {movie.overview && <p className="mt-2 text-sm text-gray-700 line-clamp-3">{movie.overview}</p>}
      </div>
    </article>
  );
};

export default MovieCard;
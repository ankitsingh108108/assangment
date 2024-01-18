import { Movie } from "@/api/movie";
import Link from "next/link";
import React from "react";

type Props = Movie & {};

const MovieCard = (props: Props) => {
  const { _id, posterUrl, publishYear, title } = props;
  return (
    <article className="p-3 pb-4 bg-card max-w-[300px] rounded-xl">
      <Link href={`/${_id}`}>
        {posterUrl ? (
          <img
            className="min-h-[400px] rounded-xl mb-4 object-cover"
            src={posterUrl}
            alt={`movie-img-${title}`}
          />
        ) : null}
        <h5 className="text-xl mb-2">{title}</h5>
        <p className="text-sm">{publishYear}</p>
      </Link>
    </article>
  );
};

export default MovieCard;

import React from "react";

type Props = {};

const MovieCard = (props: Props) => {
  return (
    <article className="p-3 pb-4 bg-card max-w-[300px] rounded-xl">
      <img
        className="min-h-[400px] rounded-xl mb-4 object-cover"
        src="https://s3-alpha-sig.figma.com/img/71b7/26c9/bdb04893d9269540ca86da074296255e?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ByMZQNKchMpNKY7Xl8JbSITxISTeoS-ferfGMxDB1HjH7vddzvFJ5kHOOPDX6OLs3YWc14l-DOB7DUQkdiVHb3W1Kk537V1wTAPdeqcvHG2NNmXwUIGTCevfJNnYh6w0W9zih7s1K-lF1WNVeaDJnWLSC-~yt90tHlNbHg9AljDDrS-I2ydHjuu-d9t-BYO5VdKKp1jvkEvhrK4vP9XpfbbKTBl1HXIgQmPdWznVGp7ZztgFDZUBkz~a1wsDzA~-uFgWNr9gBilLzNV4Deq1Kv6Eb~UItgb5FZiDnqCntgn46xlWqTgma3IvgPJh5BjeXBLJjfQTS5Guu1ncAuPeGQ__"
        alt=""
      />
      <h5 className="text-xl mb-2">Movie 1</h5>
      <p className="text-sm">2021</p>
    </article>
  );
};

export default MovieCard;

"use client";
import { MovieCard } from "@/components/MovieCard";
import { Pagination } from "@/components/Pagination";
import React from "react";

type Props = {};

const MovieList = (props: Props) => {
  return (
    <>
      <MovieCard />
      <Pagination
        count={10}
        currentPage={9}
        onClickPage={(p) => console.info(p)}
      />
    </>
  );
};

export default MovieList;

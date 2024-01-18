import MovieForm from "@/components/movieForm";
import React from "react";

type Props = {};

const AddPage = (props: Props) => {
  return (
    <section className="p-[120px] min-h-[calc(100vh-117px)]">
      <h2 className="text-5xl mb-[120px] font-semibold">Create a new movie</h2>{" "}
      <MovieForm />
    </section>
  );
};

export default AddPage;

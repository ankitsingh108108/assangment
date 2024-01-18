import SignForm from "@/components/signForm";
import React from "react";
import { Montserrat } from "next/font/google";
import clx from "classnames";
const font = Montserrat({ subsets: ["latin"] });

type Props = {};

const Login = (props: Props) => {
  return (
    <section
      className={clx(
        "flex min-h-[calc(100vh-117px)] flex-col items-center justify-center p-24",
        font.className
      )}
    >
      <div className="max-w-[300px] w-full">
        <h2 className=" text-[64px] font-semibold mb-10 text-center">
          Sign in
        </h2>
        <SignForm />
      </div>
    </section>
  );
};

export default Login;

"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/FormElements";
import React, { useCallback, useId, useMemo, useState } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";

type Props = {};

const fields = [
  {
    name: "title",
    type: "text",
    placeholder: "Title",
  },
  {
    name: "year",
    type: "text",
    placeholder: "Publishing year",
  },
];
const baseStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  //   backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  width: "100%",
  height: "500px",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
const MovieForm = (props: Props) => {
  const id = useId();
  const [files, setFiles] = useState<{ file?: File; preview?: string }>({
    file: undefined,
    preview: undefined,
  });
  const onDrop: (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void = useCallback((acceptedFiles) => {
    console.info(acceptedFiles);

    if (acceptedFiles?.length) {
      const a = {
        file: acceptedFiles[0],
        preview: URL.createObjectURL(acceptedFiles[0]),
      };
      console.info(a);

      setFiles(a);
      console.info(acceptedFiles);
    }
  }, []);
  const { getRootProps, getInputProps, ...rest } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1,
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(rest?.isFocused ? focusedStyle : {}),
      ...(rest?.isDragAccept ? acceptStyle : {}),
      ...(rest?.isDragReject ? rejectStyle : {}),
    }),
    [rest.isFocused, rest.isDragAccept, rest.isDragReject]
  );

  return (
    <div>
      <div className="grid grid-cols-12 grid-flow-row">
        <div className="col-span-6 row-start-1 row-end-5">
          <div className="max-w-[80%]">
            {files.preview?.length ? (
              <div className="relative">
                <img
                  className=" w-full max-h-[500px] rounded-[10px]"
                  src={files?.preview}
                  alt={files.file?.name}
                />
                <button
                  className="text-black absolute right-3 top-2"
                  onClick={() => setFiles({})}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66m9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83z"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div
                {...getRootProps({ style })}
                //    className="w-full h-[500px] border border-white border-dashed max-w-[80%] rounded-[10px] flex justify-center items-center flex-col"
              >
                <input {...getInputProps()} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3_346)">
                    <path
                      d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_346">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-sm mt-2">Drop an image here</p>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-4 row-start-1 row-end-2">
          {fields?.map((el) => {
            return (
              <Input
                key={`${el?.name}${id}`}
                type={el?.type}
                placeholder={el?.placeholder}
                className="w-full mb-6"
              />
            );
          })}
        </div>
        <div className="col-span-4 flex row-start-2 row-end-3">
          <Button variant="secondary" className="w-1/2">
            Cancel
          </Button>
          <Button className="ml-3 w-1/2">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;

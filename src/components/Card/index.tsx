import React from "react";

type Props = {
  children?: React.ReactNode;
  data: {
    id: number;
    uuid: string;
    title: string;
    subtitle: string;
    updatedAt: string;
  };
};

const Card = ({ data }: Props) => {
  
  return (
    <div className="shadow-lg flex w-full cursor-pointer">
      <main className="py-7 px-5 rounded-r-md w-full bg-white">
      <h1 className="font-bold text-xl">{data.title}</h1>
      <h4 className="font-normal">{data.subtitle}</h4>
      <p>{data.updatedAt}</p>
        {/* <span className="flex flex-row justify-between">
          <h4 className="font-normal">{data.subtitle}</h4>
          <p>{data.updatedAt}</p>
        </span> */}
      </main>
    </div>
  );
};

export default Card;

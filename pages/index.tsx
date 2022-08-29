import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center text-2xl">Which Pokemon is rounder?</div>
      <div className="p-2" />
      <div className="border p-8 rounded flex items-center justify-between max-w-2xl">
        <div className="h-16 w-16 bg-red-300" />
        <div className="p-8">vs</div>
        <div className="h-16 w-16 bg-red-800" />
      </div>
    </div>
  );
};

export default Home;

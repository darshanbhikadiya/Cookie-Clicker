import Cookie from "@/components/Cookie";

export default function Home() {
  return (
    <div  className="flex justify-center bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 h-screen">

    {/* <div  className="flex justify-center h-screen bg-[conic-gradient(from_180deg,_#2563eb,_#38bdf8_50%)] "> */}
    {/* // <div  className="flex justify-center h-screen bg-[conic-gradient(from_180deg,_#422006,_#F9A825,_#422006)] "> */}
    {/* // <div  className="flex justify-center h-screen  bg-[conic-gradient(from_0deg,_#6d28d9,_#84cc16,_#6d28d9)]"> */}
    {/* <div  className="flex justify-center bg-gradient-to-r from-yellow-500 to-white h-screen"> */}
      <div className="flex justify-center">
        <Cookie></Cookie>
      </div>
    </div>
  );
}

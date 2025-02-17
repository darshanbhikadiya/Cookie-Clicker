"use client";
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import image from "@/public/Cookie-Image-jpeg-removebg-preview.png";
import "./Cookie.css";

export default function Cookie() {

    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(1000);
    const [clickCount, setClickCount] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(0);
    const lastClickTimeRef = useRef(0);
    const clickTimestampsRef = useRef<number[]>([]);

    // const [cps, setCps] = useState(speed); //dynamic karvu hoy ena mate che premium lidhu hoy ena mate
    const [cps, setCps] = useState(1);

    // function handleSpeed(){
    //     setSpeed(speed-0.9);
    //     setCps(((speed-1000)/1000) + 1);
    //     // setCps((cps/1000) + 0.1);
    // }

    // setTimeout(()=>{
    //     setCount(count + 0.0001);
    // },speed);

    // function handleClick(){
    //     setCount(count +  0.0001);
    //     setCps(((speed-1000)/1000 + 1));
    // }

    // function handleClick() {
    //     const currentTime = Date.now();

    //     if (currentTime - lastClickTime > 1000) {
    //         // Reset click count if it's a new second
    //         setClickCount(1);
    //         setLastClickTime(currentTime);
    //         setCount((prev) => prev + 0.0001);
    //     } else if (clickCount < 5) {
    //         // Allow click if under the limit
    //         setClickCount((prev) => prev + 1);
    //         setCount((prev) => prev + 0.0001);
    //     }
    // }

    function handleClick() {
        const currentTime = performance.now();

        clickTimestampsRef.current = clickTimestampsRef.current.filter(
            (timestamp) => currentTime - timestamp < 1000
        );

        if (clickTimestampsRef.current.length < 5) {
            clickTimestampsRef.current.push(currentTime);
            setClickCount(clickTimestampsRef.current.length);
            setCount((prev) => prev + 0.0001);
        }
    }

    //to get 4 number after point/decimal
    function getFourDecimalPlaces(number:number) {
        return Math.floor(number * 10000) / 10000;  
    }
    const roundedNumber = getFourDecimalPlaces(count); 
    
    const router = useRouter();

    function handlePremium(){
        router.push("/premium");
    }

    return (
        <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl -mt-10 text-yellow-950">{roundedNumber}</h1>
                {/* <h1 className="text-4xl -mt-10 text-yellow-950">{count}</h1> */}
                <h1 className="text-4xl -mt-1  text-yellow-950"><b>Cookies</b></h1>
                <h1 className="text-xl -mb-8  text-yellow-900">Clicks per second : {cps}</h1>   
            </div>
            <div className="relative flex justify-center items-center">
                <Image 
                    src={image}
                    alt="Cookie"
                    width={450} 
                    className={`cursor-pointer  rounded-full transition-transform duration-300 transform hover:scale-110 ${(onmouseenter) ? "hover:animate-hoveredover" : "hover:animate-hoveredout"} relative`}
                    onClick={handleClick}
                />
            </div>
            {/* <button onClick={handleSpeed} className="cursor-pointer bg-yellow-950 text-white w-40 h-10 -mt-5 rounded-3xl hover:scale-110">Increase speed</button> */}
            <button onClick={handlePremium} className="cursor-pointer bg-yellow-950 text-white w-40 h-10 -mt-5 rounded-3xl hover:scale-110">Premium</button>
        </div>
        <div>
            {/* <button onClick={handlePremium} className="bg-black text-white">Premium</button> */}
        </div>
        </div>
    );
}

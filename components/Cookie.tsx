// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { apiRequest } from "@/lib/queryClient";
// import ClickAnimation from "./ClickAnimation";

// export default function CookieClicker() {
//   const queryClient = useQueryClient();
//   const [clickAnimations, setClickAnimations] = useState<Array<{id: number, x: number, y: number}>>([]);
  
//   const { mutate } = useMutation({
//     mutationFn: async (clicks: number) => {
//       const res = await apiRequest("POST", "/api/score", { clicks });
//       return res.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["/api/score"] });
//     },
//   });

//   const handleClick = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;
//     const score = queryClient.getQueryData<{ clicks: number }>(["/api/score"]);
//     const newClicks = (score?.clicks || 0) + 1;
    
//     setClickAnimations(prev => [
//       ...prev,
//       { id: Date.now(), x: clientX, y: clientY }
//     ]);
    
//     setTimeout(() => {
//       setClickAnimations(prev => prev.slice(1));
//     }, 500);

//     mutate(newClicks);
//   };

//   return (
//     <div className="relative">
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="cursor-pointer"
//         onClick={handleClick}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1551584277-a31a25e08fc8"
//           alt="Cookie"
//           className="w-64 h-64 rounded-full object-cover shadow-2xl hover:shadow-amber-200/50"
//         />
//       </motion.div>
//       <ClickAnimation items={clickAnimations} />
//     </div>
//   );
// }


// import Image from "next/image";
// import image from "@/public/Cookie-Image-jpeg-removebg-preview.png"

// export default function Cookie(){
//     return (
//         <Image src={image} alt="Cookie Image"></Image>
//     );
// }

// "use client";
// import Image from 'next/image';
// import { useState } from 'react';
// import image from "@/public/Cookie-Image-jpeg-removebg-preview.png"

// export default function Cookie() {
//     // const [clicked, setClicked] = useState(false);

//     return (
//         <div className="flex justify-center bg-black rounded-full items-center bg-transparent">
//         <Image 
//             src={image}
//             alt="Cookie" 
//             width={450} 
//             // height={220} 
//             className={`cursor-pointer  transition-transform duration-300 transform hover:scale-110`}
//         />
//     </div>
//     );
// }


// "use client";
// import Image from 'next/image';
// import { useState } from 'react';
// import image from "@/public/Cookie-Image-jpeg-removebg-preview.png";
// import "./Cookie.css";

// export default function Cookie() {
//     const [clicked, setClicked] = useState(false);

//     return (
//         // <div className="flex justify-center items-center">
//         //     {/* Animated Background */}
                       
//         //     {/* Cookie Image */}
//         //     <Image 
//         //         src={image}
//         //         alt="Cookie" 
//         //         width={450} 
//         //         className={`cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:animate-heartbeat ${clicked ? "animate-bounce" : ""}relative`}
//         //         // onClick={()=>{setClicked(false)}}
//         //     />
//         // </div>

//         <main className="flex items-center justify-center h-screen bg-gray-100">
//             <div className="text-red-500 animate-heartbeat text-9xl">
//             <Image 
//                 src={image}
//                 alt="Cookie" 
//                 width={450} 
//                 className={`cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:animate-heartbeat relative`}
//                 // onClick={()=>{setClicked(false)}}
//             />
//             </div>
//         </main>
//     );
// }



// "use client";

// import Image from 'next/image';
// import { useState } from 'react';
// import image from "@/public/Cookie-Image-jpeg-removebg-preview.png";
// import "./Cookie.css";

// export default function Cookie() {
//     const [animate, setAnimate] = useState(false);

//     return (
//         <div className="relative flex justify-center items-center">
//             {/* Animated Background */}
//             <div 
//                 className={`absolute w-[500px] h-[500px] bg-gradient-radial from-yellow-500 to-transparent rounded-full transition-transform duration-500 ${animate ? 'animate-heartbeat' : ''}`} 
//                 onAnimationEnd={() => setAnimate(false)}
//             />
            
//             {/* Cookie Image */}
//             <Image 
//                 src={image}
//                 alt="Cookie" 
//                 width={450} 
//                 className="cursor-pointer transition-transform duration-300 transform hover:scale-110 relative"
//                 onMouseEnter={() => setAnimate(true)}
//                 onMouseLeave={() => setAnimate(true)}
//                 onClick={() => setAnimate(true)}
//             />
//         </div>
//     );
// }




"use client";
import Image from 'next/image';
import { useState } from 'react';
import image from "@/public/Cookie-Image-jpeg-removebg-preview.png";
import "./Cookie.css";

export default function Cookie() {

    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(1000);

    const [cps, setCps] = useState(speed);

    // setTimeout(()=>{
    //     setCount(count+1);
    // },1000);

    function handleSpeed(){
        setSpeed(speed-0.9);
        setCps((1 - (speed-100)/1000) + 1);
        // setCps((cps/1000) + 0.1);
    }

    // setTimeout(()=>{
    //     setCount(count+1);
    // },speed);

    function handleClick(){
        setCount(count+0.0001);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl -mt-10 text-yellow-950">{count}</h1>
                <h1 className="text-4xl -mt-1  text-yellow-950"><b>Cookies</b></h1>
                <h1 className="text-xl -mb-8  text-yellow-900">Clicks per second : {cps}</h1>
            </div>
            <div className="relative flex justify-center items-center">
                <Image 
                    src={image}
                    alt="Cookie" 
                    width={450} 
                    className={`cursor-pointer transition-transform duration-300 transform hover:scale-110 ${(onmouseenter) ? "animate-hoveredover" : "animate-hoveredout"} relative`}
                    onClick={handleClick}
                />
            </div>
            <button onClick={handleSpeed} className="cursor-pointer bg-yellow-950 text-white w-40 h-10 -mt-5 rounded-3xl hover:scale-110">Increase speed</button>
        </div>
    );
}

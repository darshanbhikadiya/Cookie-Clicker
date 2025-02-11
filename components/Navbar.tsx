// import { useQuery } from "@tanstack/react-query";
// import { Cookie } from "lucide-react";

// export default function Navbar() {
//   const { data: score } = useQuery({
//     queryKey: ["/api/score"],
//   });

//   return (
//     <nav className="h-16 border-b bg-white/50 backdrop-blur-sm">
//       <div className="container mx-auto h-full px-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Cookie className="w-6 h-6 text-amber-600" />
//           <span className="font-bold text-lg">Cookie Clicker</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-bold">{score?.clicks || 0}</span>
//           <span className="text-muted-foreground">cookies</span>
//         </div>
//       </div>
//     </nav>
//   );
// }

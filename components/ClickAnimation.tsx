// import { motion, AnimatePresence } from "framer-motion";

// interface ClickAnimationProps {
//   items: Array<{
//     id: number;
//     x: number;
//     y: number;
//   }>;
// }

// export default function ClickAnimation({ items }: ClickAnimationProps) {
//   return (
//     <AnimatePresence>
//       {items.map((item) => (
//         <motion.div
//           key={item.id}
//           className="fixed pointer-events-none"
//           initial={{ x: item.x, y: item.y, scale: 0.5, opacity: 1 }}
//           animate={{ y: item.y - 100, scale: 1, opacity: 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="flex flex-col items-center gap-1">
//             <img
//               src="https://images.unsplash.com/photo-1594034040864-790e76450565"
//               alt="Cookie"
//               className="w-8 h-8 rounded-full object-cover"
//             />
//             <span className="text-lg font-bold text-amber-600">+1</span>
//           </div>
//         </motion.div>
//       ))}
//     </AnimatePresence>
//   );
// }

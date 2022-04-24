import { motion } from "framer-motion";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.png";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.png";

export default function ScrollArea() {
  return (
    <div className=" bg-white text-black text-5xl py-32 overflow-hidden">
      <div className="md:block hidden">
        <motion.div
          animate={{ x: 100 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            repeatType: "reverse",
            from: 0,
            to: 1800,
          }}
          className="grid grid-cols-3 gap-x-10"
        >
          <img src={img4} alt="4" className="max-w-[350px]" />
          <img src={img5} alt="5" className="max-w-[350px]" />
          <img src={img6} alt="6" className="max-w-[350px]" />
        </motion.div>
        <motion.div
          animate={{ x: 100 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            repeatType: "reverse",
            from: 1000,
            to: 0,
          }}
          className="grid md:grid-cols-3 mb-32 gap-10"
        >
          <img src={img1} alt="1" className="max-w-[350px]" />
          <img src={img2} alt="2" className="max-w-[350px]" />
          <img src={img3} alt="3" className="max-w-[350px] place-content-end" />
        </motion.div>
      </div>

      <div className="md:hidden block overflow-hidden">
        <motion.div
          animate={{ x: 100 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: "reverse",
            from: 500,
            to: 0,
          }}
          className="grid grid-cols-3 mb-32 gap-x-60"
        >
          <img src={img1} alt="1" className="max-w-[250px] mr-4" />
          <img src={img2} alt="2" className="max-w-[250px] mr-4" />
          <img src={img3} alt="3" className="max-w-[250px] place-content-end" />
        </motion.div>

        <motion.div
          animate={{ x: 100 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: "reverse",
            from: 0,
            to: 500,
          }}
          className="grid grid-cols-3 gap-x-60"
        >
          <img src={img4} alt="4" className="max-w-[250px]" />
          <img src={img5} alt="5" className="max-w-[250px]" />
          <img src={img6} alt="6" className="max-w-[250px]" />
        </motion.div>
      </div>
    </div>
  );
}

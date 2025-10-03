import Section from "./Section";
import Window from "../components/Window";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Section
      content={
        <div className="my-[20px] sm:my-10 w-full flex flex-col">
          <div className="flex flex-col gap-[20px] sm:gap-5">
            <Link className="w-full sm:w-[300px] lg:w-full " to="../">
              <motion.button
                className="w-full sm:w-[300px] py-2 bg-sky-700 border-4 border-black text-white font-bold text-center text-xl sm:text-2xl hover:bg-sky-800 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Back to Home
              </motion.button>
            </Link>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Window
                title="Contact"
                content={
                  <div className="h-[60vh]">
                    <div className="p-5 flex flex-col gap-3"></div>
                  </div>
                }
              ></Window>
            </motion.div>
          </div>
        </div>
      }
    />
  );
};

export default Contact;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Window from "./Window";

const WebsiteFrame = ({ site, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleIframeLoad = () => setIsLoading(false);

  return (
    <>
      {/* Thumbnail view - click to open modal */}
      <motion.div
        className="w-full flex flex-col website-frame cursor-pointer relative"
        onClick={openModal}
        transition={{ duration: 0.2 }}
      >
        <motion.div className="w-full h-[300px] flex items-center justify-center relative overflow-hidden border-4 border-black">
          {/* Blurred iframe with overlay */}
          <div className="relative w-full h-full">
            <iframe
              src={`https://${site}`}
              className={`w-full h-full bg-white pointer-events-none transition-all duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              title={`Preview of ${site}`}
              onLoad={handleIframeLoad}
            >
              <p>Your browser does not support iframes.</p>
            </iframe>

            {/* Loading state */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="animate-pulse text-gray-500">
                  Loading preview...
                </div>
              </div>
            )}

            {/* Blur overlay and play button */}
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
              <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
                <motion.div
                  className="w-16 h-16 bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition-color border-4 border-black"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </motion.div>
                <div className="text-white">
                  <div className="text-2xl font-black">{title}</div>
                  <div className="text-center lg:text-left">Click to Play!</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal overlay - appears when clicked */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-300"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-[95%] h-[90vh] "
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              {/* Modal content */}
              <div className="h-full flex flex-col lg:flex-row gap-10 justify-between">
                <div className="h-full justify-center lg:w-1/4 flex flex-col gap-10 items-start">
                  <div className="text-5xl font-black">{title}</div>
                  <div className="text-xl">{description}</div>
                  <div className="lg:hidden text-[14px] text-red-700">
                    Embeded preview is not supported on mobile.<br></br>↓ Visit
                    the site instead
                  </div>
                  <motion.button
                    className="text-xl transition-colors bg-white hover:bg-gray-300 border-4 border-black px-4 py-2 font-black"
                    onClick={() => window.open(`https://${site}`, "_blank")}
                    aria-label="Close modal"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Visit Site
                  </motion.button>
                  <motion.button
                    className="text-xl hover:text-blue-700 transition-colors"
                    onClick={closeModal}
                    aria-label="Close modal"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ← Back
                  </motion.button>
                </div>
                <div className="hidden lg:flex w-full">
                  <Window
                    title={site}
                    content={
                      <div className="w-full h-full flex items-center justify-center">
                        <iframe
                          src={`https://${site}`}
                          className="w-full h-full bg-white"
                          title={site}
                        >
                          <p>Your browser does not support iframes.</p>
                        </iframe>
                      </div>
                    }
                  ></Window>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WebsiteFrame;

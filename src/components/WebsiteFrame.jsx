import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Window from "./Window";

// Portal component to render modal outside the component tree
const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
};

const Modal = ({ isOpen, onClose, site, title, description }) => {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-300"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-[95%] h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {/* Modal content */}
              <div className="h-full flex flex-col lg:flex-row gap-[50px] justify-between">
                <div className="h-full justify-center lg:w-1/4 flex flex-col gap-7 lg:gap-10 items-start">
                  <div className="text-5xl font-black">{title}</div>
                  <div className="text-xl">{description}</div>
                  <div className="lg:hidden text-[14px] text-blue-700">
                    Preview is only supported on desktop.
                    <br />↓ Visit the site instead
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
                    onClick={onClose}
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
                          className="w-full h-full"
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
    </Portal>
  );
};

const WebsiteFrame = ({ site, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="relative w-full flex flex-col website-frame cursor-pointer"
        onClick={openModal}
      >
        <div className="w-full h-[300px] flex items-center justify-center overflow-hidden border-4 border-black">
          <div className="absolute inset-0 bg-black/80 flex flex-col lg:flex-row gap-5 items-center justify-center">
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
          <iframe
            src={`https://${site}`}
            className="w-full h-full bg-white pointer-events-none transition-all duration-300"
            title={`Preview of ${site}`}
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        site={site}
        title={title}
        description={description}
      />
    </>
  );
};

export default WebsiteFrame;

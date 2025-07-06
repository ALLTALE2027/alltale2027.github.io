import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "darshandeshmukh20@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <motion.button
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight 
  bg-primary w-[12rem] cursor-pointer overflow-hidden"
      onClick={copyToClipboard}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 1.1 }}
    >
      <AnimatePresence mode="wait">
        {isCopied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            key="copied"
          >
            <img
              src="assets/copy-done.svg"
              alt="copy done icon"
              className="w-5"
              // style={{ backgroundColor: "green" }}
            />
            Email has been copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            key="copy"
          >
            <img src="assets/copy.svg" alt="copy icon" className="w-5" />
            Copy email address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;

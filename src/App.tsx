import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Gift, X, Star } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const IMAGES = [
  "/images/WhatsApp Image 2026-01-23 at 13.35.43.jpeg",
  "/images/WhatsApp Image 2026-01-23 at 13.35.44 (1).jpeg",
  "/images/WhatsApp Image 2026-01-23 at 13.35.44 (2).jpeg",
  "/images/WhatsApp Image 2026-01-23 at 13.35.44.jpeg",
  "/images/WhatsApp Image 2026-01-23 at 13.35.45 (1).jpeg",
  "/images/WhatsApp Image 2026-01-23 at 13.35.45.jpeg",
  "/images/WhatsApp Image 2026-03-18 at 03.44.51.jpeg",
  "/images/WhatsApp Image 2026-03-18 at 06.33.09.jpeg",
  "/images/WhatsApp Image 2026-03-18 at 06.33.12_1.jpeg",
  "/images/WhatsApp Image 2026-03-18 at 06.33.13.jpeg",
];

const InfiniteCarousel = ({ images, direction = "left" }: { images: string[], direction?: "left" | "right" }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 relative">
      <motion.div
        className="inline-flex gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30, // Slower for better viewing of real photos
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-secondary bg-white">
            <img
              src={src}
              alt={`Memory ${index}`}
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-light">
      {/* 1. Introduction Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-12 bg-white/50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl text-primary font-bold leading-tight">
            To My Beautiful <span className="text-secondary italic">Girlfriend</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Every day with you feels like a dream I never want to wake up from. 
            I am so incredibly grateful for your love, your smile, and the way you make my world so much brighter. 
            You are my everything, and I feel like the luckiest person alive to have you by my side.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <Heart className="fill-current" />
            <span className="font-semibold uppercase tracking-widest text-sm">Forever Yours</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="absolute -inset-4 border-2 border-secondary rounded-2xl rotate-3" />
          <img
            src="/images/WhatsApp Image 2026-03-18 at 06.33.13.jpeg"
            alt="Introduction"
            className="rounded-2xl shadow-2xl relative z-10 w-full max-w-md mx-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* 2. Plans Section */}
      <section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-20 py-20 gap-12 bg-pink-50">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-2">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Future</span>
            <h2 className="text-4xl md:text-6xl text-primary font-bold">Purposes and Plans</h2>
          </div>
          <ul className="space-y-6">
            {["Get married", "Have children", "Until eternity"].map((plan, i) => (
              <motion.li
                key={plan}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4 text-2xl text-gray-700"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                  <Star size={20} className="fill-current" />
                </div>
                {plan}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="/images/WhatsApp Image 2026-03-18 at 06.33.09.jpeg"
            alt="Plans"
            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-8 border-white object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* 3. Memory Timeline */}
      <section className="py-24 bg-white/30">
        <div className="text-center mb-16 px-6">
          <h2 className="text-5xl text-primary font-bold mb-4">Memory Timeline</h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>
        <div className="space-y-8">
          <InfiniteCarousel images={IMAGES} direction="left" />
          <InfiniteCarousel images={IMAGES} direction="right" />
        </div>
      </section>

      {/* 4. Birthday Wish Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-pink-50 to-pink-100">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer group relative"
        >
          <div className="absolute -inset-8 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-all" />
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-4 border-secondary flex flex-col items-center gap-4">
            <Gift size={120} className="text-primary animate-bounce" />
            <span className="text-xl font-bold text-primary uppercase tracking-widest">Open Your Gift</span>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border-4 border-secondary"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-pink-50 rounded-full transition-colors z-10"
              >
                <X className="text-primary" />
              </button>
              <div className="p-12 text-center space-y-6">
                <div className="inline-block p-4 bg-pink-50 rounded-full mb-4">
                  <Heart size={48} className="text-primary fill-current" />
                </div>
                <h3 className="text-4xl text-primary font-bold">Happy Birthday, My Love!</h3>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  "On this special day, I want to remind you of how much you mean to me. 
                  You are the most amazing person I know, and I am so proud of everything you are. 
                  May your year be filled with as much joy, laughter, and love as you bring into my life every single day. 
                  I can't wait to celebrate many more birthdays with you. I love you more than words can say!"
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors"
                  >
                    Close with Love
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-pink-100">
        <p>© 2026 Made with ❤️ for the most special girl in the world</p>
      </footer>
    </div>
  );
}

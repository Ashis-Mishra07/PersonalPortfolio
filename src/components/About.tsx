import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          ABOUT ME
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}>
            <img
              src="/me.jpeg"
              alt="Ashis Kumar Mishra"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              Hi, I'm Ashis Kumar Mishra — a dedicated Full Stack Developer, AI
              enthusiast, and competitive programmer. With a strong foundation
              in technologies like React, Node.js, Python, AI integrations, and Quantum Networks
              I build intelligent, user-centric platforms that make a real-world
              impact.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              I am also a Knight on LeetCode and an active contributor to the
              developer community.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              From building AI-driven interview platforms and smart automation
              tools to mentoring juniors and leading event tech at NIT Rourkela,
              I am driven by a passion for learning, creating, and helping
              others grow in the tech ecosystem.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-gray-900">2000+</h3>
                <p className="text-gray-600">LeetCode Rating (Knight)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-gray-900">25+</h3>
                <p className="text-gray-600">Projects Built in Web & AI</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-gray-900">2+</h3>
                <p className="text-gray-600">Hackathons Participated & Won</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-gray-900">2700+</h3>
                <p className="text-gray-600">Geeks For Geeks Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

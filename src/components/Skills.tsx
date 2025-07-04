import { Brain, Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS", "ShadCN", "TypeScript"],
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Firebase Functions",
      "REST APIs",
      "Python",
    ],
  },
  {
    category: "Competitive Programming",
    icon: Code,
    skills: [
      "LeetCode Knight (2000+)",
      "Codeforces Pupil",
      "AtCoder (3000+ Rank)",
      "GfG (1850+)",
    ],
  },
  {
    category: "AI & Tools",
    icon: Terminal,
    skills: ["OpenAI", "LangChain", "LlamaIndex", "Google Gemini", "Pinecone"],
  },
  {
    category: "Machine Learning",
    icon: Brain, // You may need to import this icon from `lucide-react` or use any ML-related icon
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Dynamic Time Warping",
      "LSTM Models",
    ],
  },
  {
    category: "Python Ecosystem",
    icon: Code, // You can use a Python-specific icon if available
    skills: [
      "Flask",
      "FastAPI",
      "BeautifulSoup",
      "Requests",
      "Pydantic",
      "PyPDF2",
    ],
  },
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "Firebase", "MongoDB", "Supabase", "AWS (Basics)"],
  },
  {
    category: "Design & Prototyping",
    icon: Palette,
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"],
  },
];



export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-indigo-600" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
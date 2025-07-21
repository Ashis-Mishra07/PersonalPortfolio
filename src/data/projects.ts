import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    "title": "Quantum-Classical Hybrid Network Simulator",
  "description": "A comprehensive simulation platform for quantum internet infrastructure research and analysis.",
  "image": "quantum_network.png",
  "tech": ["Python", "Streamlit", "NetworkX", "NumPy", "Plotly", "Pandas", "Matplotlib"],
  "github": "https://github.com/Ashis-Mishra07/Cisco",
  "live": "https://codewithcisco.streamlit.app/",
  "details": {
    "problem": "Quantum networking research lacks practical simulation tools that model real-world physics constraints and hybrid architectures.",
    "solution": "Developed a complete quantum-classical network simulator with realistic decoherence modeling, intelligent routing protocols, and comprehensive security analysis.",
    "features": [
      "Hybrid network topology with 40% quantum nodes",
      "Advanced Dijkstra routing with quantum preference",
      "Quantum physics modeling (decoherence, no-cloning, entanglement)",
      "Interactive 6-tab Streamlit dashboard",
      "Post-quantum cryptography comparison (5 methods)",
      "Performance analysis across 10-100 node networks",
      "Quantum repeater optimization achieving 92.3% improvement"
    ],
    "impact": "Provides researchers and engineers with a practical framework for evaluating quantum internet infrastructure requirements and identifying scalability bottlenecks."
  }
  },
  {
    title: "Course Navigator",
    description: "An intelligent platform that generates personalized tech learning paths.",
    image: "aicourse.png",
    tech: ["Next.js", "React", "Vapi", "GeminiAI", "ShadCN"],
    github: "https://github.com/Ashis-Mishra07/AI-Course_Generator",
    live: "https://ai-course-generator-indol.vercel.app/",
    details: {
      problem: "Learners struggle to find structured and up-to-date content across the web.",
      solution: "Built an AI-driven course generator that fetches and organizes the best online resources.",
      features: [
        "Personalized learning paths",
        "Web crawling and summarization",
        "PDF generation from curriculum",
        "Integrated interview practice",
      ],
      impact: "Simplified the tech learning journey for beginners and upskillers.",
    },
  },
  {
    title: "Medical Diagnosis",
    description: "A deep learning project for diagnosing diseases from medical inputs.",
    image: "diagnose.png",
    tech: ["Python", "Scikit-learn", "Streamlit","HuggingFace", "TensorFlow" , "Keras", "XgBoostClassfier"],
    github: "https://github.com/Ashis-Mishra07/Medical_Diagnose",
    live: "https://medicaldiagnose1.streamlit.app/",
    details: {
      problem: "Early disease prediction using simple health metrics is underutilized.",
      solution: "Trained models to predict diabetes, heart disease, and other conditions.",
      features: [
        "Multiple disease classification",
        "Health data visualization",
        "Model performance evaluation",
        "User-friendly Streamlit UI",
      ],
      impact: "Assisted users in performing preliminary medical checks before hospital visits.",
    },
  },
  {
    title: "Medical Assistant Chatbot",
    description: "An AI-powered chatbot for answering basic medical queries.",
    image: "chatbot.png",
    tech: ["Python", "OpenAI", "Gradio", "SpeechRecognition", "ElevenLabs" ,"StT and TtS"],
    github: "https://github.com/Ashis-Mishra07/Ai_Medical_Chatbot",
    live: "https://ashiskumarmishra-ai-chat.hf.space/",
    details: {
      problem: "Patients in rural areas lack access to quick, reliable medical advice.",
      solution: "Developed a voice-interactive chatbot for symptom checking and health guidance.",
      features: [
        "Voice-to-text consultation",
        "Image upload for diagnosis",
        "Text-to-speech replies",
        "Multiple disease detection",
      ],
      impact: "Increased accessibility to health information in underserved communities.",
    },
  },
  {
    title: "Interview Agent",
    description: "A real-time voice-based AI interviewer for mock tech interviews.",
    image: "interview.png",
    tech: ["Next.js", "Vapi", "OpenAI", "WebRTC", "Tailwind CSS"],
    github: "https://github.com/Ashis-Mishra07/interview_2",
    live: "https://interview-2-7b3h.vercel.app",
    details: {
      problem: "Aspiring developers lack personalized, real-time interview practice.",
      solution: "Developed an AI agent that simulates interview scenarios and provides structured feedback.",
      features: [
        "Real-time voice interaction",
        "Role-specific question sets",
        "Feedback and scoring system",
        "OpenAI-powered assessment",
      ],
      impact: "Enhanced preparation for technical interviews across multiple domains.",
    },
  },
  
  {
    title: "PDF Analyzer",
    description: "A tool to analyze, summarize, and interact with PDFs using natural language.",
    image: "pdf.png",
    tech: ["Next.js", "React", "GeminiAI", "Tailwind", "Clerk"],
    github: "https://github.com/Ashis-Mishra07/AiPDF-Maker",
    live: "https://ai-pdf-maker.vercel.app/",
    details: {
      problem: "Manually parsing and understanding large PDFs is time-consuming.",
      solution: "Created an app to query and summarize any uploaded PDF using AI.",
      features: [
        "Ask questions from PDFs",
        "PDF summarization",
        "Note generation",
        "Clean UI for document preview",
      ],
      impact: "Saved hours for researchers, students, and legal professionals.",
    },
  },
  {
    title: "Email SaaS App",
    description: "A full-stack platform to manage, automate, and personalize email interactions.",
    image: "email.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI"],
    github: "https://github.com/rajanikant04/hackfest",
    live: "https://go-flow-mu.vercel.app/",
    details: {
      problem: "Startups and individuals struggle with efficient email communication and automation.",
      solution: "Built an Email SaaS with AI-powered drafting, scheduling, and categorization.",
      features: [
        "Smart email composition",
        "Auto-tagging and categorization",
        "Draft polishing with OpenAI",
        "Custom SMTP integration",
        "Auto Fetching and follow up Question Answering "
      ],
      impact: "Top 5 finalist at ISM Dhanbad Hackathon out of 80 teams.",
    },
  },
  
];

// Edit this file to update the whole site. Content comes from the resume.
export const profile = {
  name: 'Monika Singh', email: '2829monikasingh@gmail.com', phone: '+919243146635', location: 'Mohali, India',
  resume: '/Monika_Singh_Resume.pdf',
  summary: 'Strong understanding of C/C++, data structures and algorithms, with knowledge of operating systems concepts and memory management, a basic understanding of databases and the SDLC, and a problem-solving mindset.',
}
export const links = {
  github: 'https://github.com/monika-singh-baghel',
  linkedin: 'https://www.linkedin.com/in/monika-singh-578701279/',
  leetcode: 'https://leetcode.com/u/monikasingh_91/',
  codolio: 'https://codolio.com/profile/cFfVFNmG',
  gfg: 'https://www.geeksforgeeks.org/profile/3891moni58uo?tab=activity',
  codeforces: 'https://codeforces.com/profile/3891monikasingh',
  codechef: 'https://www.codechef.com/users/monikasingh_91',
  hackerrank: 'https://www.hackerrank.com/profile/3891monikasingh',
}
export const skills = [
  { title: 'Programming Languages', items: ['C', 'C++', 'Java', 'Python', 'HTML'] },
  { title: 'Frontend', items: ['React', 'React Native', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Bootstrap'] },
  { title: 'Backend & Real-time (from projects)', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'WebRTC', 'bcrypt'] },
  { title: 'Databases', items: ['SQL', 'NoSQL', 'MongoDB Atlas'] },
  { title: 'Tools & Platforms', items: ['Visual Studio Code', 'Git', 'GitHub', 'Jest', 'Vercel', 'Render'] },
  { title: 'Core CS & Problem Solving', items: ['Data Structures', 'Algorithms', 'OS Concepts', 'Memory Management', 'SDLC', 'Matplotlib', 'Seaborn', 'Pandas', 'NumPy', 'Streamlit'] },
]
export const projects = [
  { id: 'govai', name: 'GovAi', category: 'Full-stack · Complaint Management & Resolution System', period: 'Oct 2025 – Apr 2026',
    problem: 'Registering, tracking and managing complaints in one platform with persistent records and secured access.',
    features: ['Complaint registration, tracking and management', 'RESTful APIs for authentication and complaint CRUD', 'Authentication, authorization and CORS', 'MongoDB Atlas storage; deployed on Vercel and Render'],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS', 'REST APIs'],
    demo: 'https://govai-complaint-system.vercel.app/', repo: '' as string, image: '/govai.jpg', imageAlt: 'GovAi admin dashboard showing complaint analytics',
    flow: ['React client', 'REST API (Express)', 'Auth + CORS + env config', 'MongoDB Atlas'] },
  { id: 'syncmeet', name: 'SyncMeet', category: 'Real-time · Video Conferencing Platform', period: 'Apr 2026 – Jun 2026',
    problem: 'Peer-to-peer audio/video meetings with participant management, chat and history.',
    features: ['STUN/ICE signaling, SDP negotiation, ICE candidate exchange', 'Screen sharing and real-time chat', 'Meeting history tracking in MongoDB', 'Secure auth with bcrypt and token-based access control'],
    tech: ['React', 'WebRTC', 'Socket.IO', 'Node.js', 'Express', 'MongoDB', 'Axios', 'Context API', 'Material UI', 'React Router'],
    image: '/syncmeet.jpg', imageAlt: 'SyncMeet landing page with Connect with your people, anywhere hero and live meeting preview',
    demo: '' as string, // SET YOUR SYNCMEET DEMO URL HERE when available
    repo: '' as string, // SET YOUR SYNCMEET REPO URL HERE
    flow: ['React client', 'Socket.IO signaling', 'WebRTC peer connection (STUN/ICE/SDP)', 'MongoDB (users, meetings)'] },
  { id: 'dsa', name: 'DSA Instructor AI', category: 'Full-stack · AI-powered DSA Learning Assistant', period: '' as string,
    problem: 'An AI learning assistant that helps students understand Data Structures and Algorithms through explanations, examples, tutorials, problem-solving guidance and an interactive coding playground.',
    features: ['Ask DSA questions and get AI-generated explanations, approach, C++ code, dry run and complexity', 'Structured tutorials and an interactive code playground', 'History of previous questions and interactions, plus a settings page', 'Express.js backend integrating the Google Gemini API; deployed on Render'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'Google Gemini API', 'Render', 'Git'],
    demo: 'https://dsa-instructor-ai-l45d.onrender.com', repo: 'https://github.com/monika-singh-baghel/dsa-instructor-ai', image: '/dsa-instructor-ai.jpg', imageAlt: 'DSA Instructor AI dashboard with popular topics, quick start and ask-a-question panel',
    flow: ['Frontend UI (HTML/CSS/JS)', 'Express.js API backend', 'Google Gemini API', 'AI response back to the UI'] },
  { id: 'traffic', name: 'Web Traffic Trend Analyzer', category: 'Data Analysis · Python & Streamlit Dashboard', period: '' as string,
    problem: 'Analyzing website visitor data over time: filling gaps in the records, smoothing out noise to show the real trend, and estimating upcoming traffic.',
    features: ['CSV upload with data preprocessing and missing-value handling', 'Linear interpolation to estimate missing visitor counts', '3-day moving average to highlight the overall traffic trend', 'Actual vs trend visualization with a simple 5-day traffic estimate', 'Interactive Streamlit dashboard showing raw data, processed data, graph and prediction'],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit'],
    demo: 'https://monika-singh-baghel-traffic-analyser-app-6chc6n.streamlit.app/', repo: 'https://github.com/monika-singh-baghel/Traffic-Analyser', image: '/traffic-analyser.jpg', imageAlt: 'Web Traffic Trend Analyzer Streamlit dashboard',
    flow: ['Traffic data (CSV: Date, Visitors)', 'Data preprocessing', 'Missing data handling (linear interpolation)', 'Trend analysis (3-day moving average) & future estimation', 'Streamlit dashboard'] },
]
export const timeline = [
  { org: 'Chandigarh University', role: 'Bachelor of Engineering in Computer Science', date: 'May 2023 – Present', note: 'Mohali, Punjab · CGPA 8.67', kind: 'edu' },
  { org: 'Skillcraft Technology', role: 'Web Development Internship (Remote)', date: 'Jun 2025 – Jul 2025', note: 'Developed responsive websites with HTML, CSS, JavaScript and Bootstrap. Implemented user authentication and authorization using JavaScript and server-side logic.', kind: 'work' },
  { org: 'Chandigarh University', role: 'Summer In-house Internship, Data Science (Remote)', date: 'May 2025 – Jun 2025', note: 'Conducted data analysis and applied machine learning with Python; built visualizations with Matplotlib and Seaborn.', kind: 'work' },
]
export const certs = [
  { title: 'Cloud Computing', org: 'NPTEL Online Certification · 2025', note: 'Cloud architecture, virtualization, distributed systems and scalable application deployment.' },
  { title: 'Project Expo 2025 (Phase 3)', org: 'Chandigarh University · 2025', note: 'Validated full-stack skills through the VibeFlow music player project (music streaming, secure media upload).' },
  { title: 'Tekathon 4.0', org: 'Internal Hackathon of Smart India Hackathon · 2025', note: 'Participated in a hackathon focused on innovation and problem-solving.' },
  { title: 'IEEE Computational Intelligence', org: 'Volunteer', note: 'Assisted in event coordination and technical activities.' },
  { title: 'Class Representative', org: 'Chandigarh University · 4th & 5th semester', note: 'Coordinated class activities and communication between students and faculty.' },
]

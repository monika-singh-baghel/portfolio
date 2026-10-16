# 👩‍💻 Monika Singh | Portfolio

A responsive personal portfolio website showcasing my projects, skills, education and experience as a Computer Science student and aspiring full-stack developer.

🔗 **Live Site:** https://portfolio-ruddy-nine-45.vercel.app/

---

## ✨ Features

- 🎨 Modern, responsive design that works on mobile, tablet and desktop
- 🎞️ Smooth scroll and reveal animations with Framer Motion
- 🧭 Single-page layout with sections for Home, About, Skills, Projects, Experience and Contact
- 🗂️ Project cards with screenshots, feature lists, tech stacks, architecture flow, and live demo and GitHub links
- 📄 Downloadable resume
- ⚡ Fast build and load times with Vite
- 🧩 Project, skill and experience content kept in one data file (`src/data.ts`), so updates are simple

---

## 🚀 Featured Projects

| Project | Description | Tech |
| ------- | ----------- | ---- |
| **GovAi** | Complaint management and resolution system | React, TypeScript, Node.js, Express, MongoDB Atlas |
| **SyncMeet** | Real-time video conferencing platform | React, WebRTC, Socket.IO, Node.js, MongoDB |
| **DSA Instructor AI** | AI-powered DSA learning assistant | JavaScript, Node.js, Express, Google Gemini API |
| **Web Traffic Trend Analyzer** | Data analysis dashboard | Python, Pandas, NumPy, Matplotlib, Streamlit |

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 📂 Project Structure

```
portfolio/
│
├── public/                  # Static files (images, resume, favicon)
│   ├── Monika_Singh_Resume.pdf
│   ├── monika.jpg
│   ├── govai.jpg
│   ├── syncmeet.jpg
│   ├── dsa-instructor-ai.jpg
│   └── traffic-analyser.jpg
│
├── src/
│   ├── App.tsx              # Page sections and components
│   ├── data.ts              # Projects, skills, experience, certificates
│   ├── index.css            # Global styles
│   └── main.tsx             # App entry point
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/monika-singh-baghel/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open the local link shown in the terminal, usually `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

### 5. Preview the production build
```bash
npm run preview
```

---

## ✏️ Customizing

All content lives in `src/data.ts`:

- `projects`: add or edit project cards (name, features, tech, demo and repo links, screenshot)
- `skills`: update skill categories
- `timeline`: education and experience
- `certs`: certificates

Place new screenshots in the `public/` folder and reference them as `/your-image.jpg`.

---

## 🌐 Deployment

This site is deployed on **Vercel**.

1. Push the code to GitHub.
2. Import the repository on [vercel.com/new](https://vercel.com/new).
3. Use the Vite preset (build command `npm run build`, output directory `dist`).
4. Every push to `main` redeploys automatically.

🔗 **Live:** https://portfolio-ruddy-nine-45.vercel.app/

---

## 📬 Contact

- 🌐 Portfolio: [portfolio-ruddy-nine-45.vercel.app](https://portfolio-ruddy-nine-45.vercel.app/)
- 🐙 GitHub: [@monika-singh-baghel](https://github.com/monika-singh-baghel)
- 💼 LinkedIn: ADD YOUR LINKEDIN URL
- 📧 Email: ADD YOUR EMAIL

---

⭐ If you like this portfolio, feel free to star the repo!

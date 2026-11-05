# Asif Hosen — Personal Portfolio

A modern, responsive personal portfolio showcasing my journey as a developer, technical skills, professional experience, projects, and achievements.

🌐 **Live Portfolio:** [Asif Hosen](https://asif-hosen.vercel.app/)

💼 **LinkedIn:** [Asif Hosen](https://www.linkedin.com/in/asif-hosen/)

🐙 **GitHub:** [asif213067](https://github.com/asif213067)

---

## 📖 About the Project

This portfolio website serves as my professional online presence, highlighting my development journey, technical expertise, projects, and professional background.

It is designed to provide recruiters, developers, and potential collaborators with an overview of my skills, experience, and work.

The website focuses on a clean user interface, responsive layouts, smooth interactions, and an accessible browsing experience across different devices.

## ✨ Features

- **Personal Introduction:** Hero section introducing me and my development focus.
- **About Me:** Overview of my background, interests, and professional goals.
- **Professional Experience:** Display of work experience and responsibilities.
- **Technical Skills:** Organized presentation of programming languages, technologies, and tools.
- **Projects Showcase:** Highlights selected projects with descriptions, technologies, and links.
- **DSA Section:** Dedicated section for data structures and algorithms.
- **Education:** Academic background and qualifications.
- **Certifications:** Professional certifications and achievements.
- **Publications:** Display of publications and related work.
- **Contact Form:** Visitors can send messages directly through the portfolio using EmailJS.
- **Email Notifications:** Contact form submissions are delivered through the connected Gmail service.
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop devices.
- **Dark and Light Themes:** Theme-aware styling for a comfortable browsing experience.
- **Modern UI:** Smooth animations, consistent typography, and polished visual components.

## 🛠️ Tech Stack

The project uses the following technologies:

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and interactive transitions |
| Lucide React | Icons |
| next-themes | Theme management |
| EmailJS | Contact form email delivery |
| Sonner | Toast notifications |

## 📂 Project Structure

The project follows a component-based Next.js application structure.

```text
portfolio/
├── public/
│   └── images/
│       └── Portfolio images and assets
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   └── portfolio/
│   ├── data/
│   ├── lib/
│   └── types/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── ...
```

*Note: Adjust this structure if your actual project directories differ.*

## 🚀 Getting Started

Follow these instructions to run the portfolio locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) — LTS version recommended
- npm (included with Node.js)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/asif213067/AsifHosen
```

Navigate to the project directory:

```bash
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace the placeholder values with your actual EmailJS credentials.

**Important:**
- Never commit `.env.local` to GitHub.
- Keep `.env.example` populated with placeholder values only.
- EmailJS public keys are intended for client-side usage, but configure EmailJS security restrictions to protect your service.

### 4. Start the Development Server

```bash
npm run dev
```

Open the following address in your browser:

```text
http://localhost:3000
```

## 📧 Contact Form Configuration

The portfolio uses EmailJS to handle contact form submissions.

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Connect your Gmail account through Email Services.
3. Create an email template.
4. Copy your Service ID, Template ID, and Public Key.
5. Add these values to `.env.local`.
6. Restart the development server.

The contact form collects visitor information such as:

- Name
- Email address
- Subject
- Message

EmailJS processes the submitted information and delivers the contact message to the configured email account.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## 🌐 Deployment

The portfolio is deployed using [Vercel](https://vercel.com/).

### Deployment Steps

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in Vercel.
4. Deploy the project.
5. Verify the production website and contact form.

**Live Website:** [https://asif-hosen.vercel.app/](https://asif-hosen.vercel.app/)

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS Gmail service identifier |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS email template identifier |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

These variables must be configured locally and in the Vercel project settings.

## 📄 License

This project is intended for educational, professional, and portfolio purposes.

The source code is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Asif Hosen**

Full-Stack Developer

- GitHub: [@asif213067](https://github.com/asif213067)
- LinkedIn: [Asif Hosen](https://www.linkedin.com/in/asif-hosen/)
- Portfolio: [asif-hosen.vercel.app](https://asif-hosen.vercel.app/)

---

⭐ If you find this project interesting, feel free to explore my portfolio and connect with me!

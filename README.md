# Hire22 Redesign – Hire Now Page

This project is a **redesigned version of the Hire Now page** from [Hire22.ai](https://hire22.ai), built with **Next.js (App Router)**.  
The goal was to improve UI/UX, performance, SEO, and accessibility, while adding a new registration form to demonstrate frontend integration with APIs.

🔗 **Live Demo:** [hire22-redesign.vercel.app](https://hire22-redesign.vercel.app)  
💻 **Source Code:** [GitHub Repository](https://github.com/Sushreesandhya123/hire22-redesign)  

---

## ✨ Features & Improvements

### 1. Registration Form (New Feature)
- Added a short registration form with the following fields:  
  - Company Name  
  - Contact Person Name  
  - Email  
  - Mobile Number  
- On form submission:  
  - Sends data to a  API  as JSON.  
  - Displays a **success** or **error** message dynamically.  

### 2. UI/UX Redesign
- Created a **modern, clean layout** instead of copying the original.  
- Improved visual hierarchy with better spacing, typography, and icon usage.  
- Added **Framer Motion animations** for smooth interactions.  

### 3. Responsiveness
- Designed with a **mobile-first approach**.  
- Optimized for **mobile, tablet, and desktop** using Tailwind CSS.  

### 4. Performance Enhancements
- Optimized images using **`next/image`** (lazy loading, responsive sizes).  
- Applied **automatic font optimization** with `next/font` (Geist).  
- Minimized unused styles with Tailwind JIT.  

### 5. SEO Optimizations
- Added **semantic HTML structure** (`<header>`, `<main>`, `<section>`, `<footer>`).  
- Implemented **meta tags** for description and social sharing.  
- Used proper heading hierarchy (`h1`, `h2`, `h3`) for better indexing.  

### 6. Accessibility Improvements
- Added **labels and aria attributes** for form inputs.  
- Ensured **sufficient color contrast** for readability.  
- Enabled **keyboard navigation** for all interactive elements.  

---

## 🛠 Tech Stack
- [Next.js 14](https://nextjs.org/) (App Router)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/) (animations)  
- [Lucide Icons](https://lucide.dev/) (SVG icons)  

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Sushreesandhya123/hire22-redesign.git
cd hire22-redesign
npm install

<div align="center">
  <img src="public/logo.png" alt="SocialMoon Logo" width="120" />

  <h1>SocialMoon</h1>
  <p><strong>Grow. Engage. Conquer.</strong></p>
  <p>Social Media Marketing Agency — Lucknow, India</p>

  <p>
    <a href="https://www.instagram.com/the_social_moon_">
      <img src="https://img.shields.io/badge/Instagram-the__social__moon__-E4405F?style=flat&logo=instagram&logoColor=white" />
    </a>
    <a href="mailto:socialmoon.in@gmail.com">
      <img src="https://img.shields.io/badge/Email-socialmoon.in@gmail.com-D14836?style=flat&logo=gmail&logoColor=white" />
    </a>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-green?style=flat&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/License-Private-red?style=flat" />
  </p>
</div>

---

> 🔒 **Private & Confidential** — This repository is proprietary. Unauthorized use, distribution, or reproduction is strictly prohibited.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Shadcn/UI |
| Database | MongoDB + Mongoose |
| Auth | NextAuth.js |
| AI Chatbot | NVIDIA API |
| Media | Firebase Storage |

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env.local`:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/socialmoon
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your-secure-password
   NVIDIA_API_KEY=your-nvidia-api-key
   ```

3. **Create superadmin & run:**
   ```bash
   npx ts-node scripts/create-superadmin.ts
   npm run dev
   ```

---

## 👨‍💼 Admin Dashboard

Access at `/admin/login` — manage all site content, messages, and users.

---

## 🚀 Deployment

```bash
npm run build
npm start
```

Set all env variables in your deployment platform before going live.

---

<div align="center">
  <p>© 2026 SocialMoon. All rights reserved.</p>
</div>


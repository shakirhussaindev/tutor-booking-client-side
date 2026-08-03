# 🎓 Smart Tutor

Smart Tutor is an online tutor booking platform where students can easily find qualified tutors, explore tutor profiles, and book learning sessions. Tutors can manage their profiles, while students can securely book and manage their sessions through an intuitive and responsive interface.

## 🌐 Live Website

🔗 https://tutor-booking-client-side.vercel.app/

## ✨ Features

- 🔍 Search and filter tutors by name and session start date.
- 📚 View detailed tutor profiles including experience, teaching mode, available days, hourly fee, and session information.
- 📅 Secure tutor session booking with slot availability validation.
- 👤 Authentication using Better Auth with Email/Password and Google Sign-in.
- 📋 Personal dashboard to manage booked sessions, tutor listings, and user profile.

## 🛠️ Tech Stack

### Frontend
- Next.js 16 (App Router)
- React
- Tailwind CSS
- shadcn/ui
- Better Auth
- React Hook Form
- React Hot Toast
- React Icons

### Backend
- Express.js
- MongoDB
- JWT Authentication (Better Auth + jose)

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/shakirhussaindev/tutor-booking-client-side.git
```

Go to the project directory:

```bash
cd tutor-booking-client-side
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## 🔑 Environment Variables

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_uri

BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

NEXT_PUBLIC_SERVER_URL=http://localhost:5000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
```

## 📄 License

This project is created for educational purposes.
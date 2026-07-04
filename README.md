# 🎬 MovieGo – Full Stack Movie Ticket Booking Application

> A modern, full-stack movie ticket booking platform that enables users to discover movies, book seats, and make secure online payments through an intuitive and responsive interface.

🌐 **Live Demo:** https://moviego-eight.vercel.app/

---

## 📖 Overview

MovieGo is a full-stack web application inspired by modern movie booking platforms. It allows users to browse currently available movies, view detailed information, select seats, book tickets, and complete payments securely.

The project demonstrates end-to-end full-stack development by integrating a React frontend with a Node.js backend, secure authentication, payment processing, email notifications, and third-party APIs.

---

## ✨ Features

- 🎥 Browse trending and latest movies
- 🔍 Search movies instantly
- 📄 View detailed movie information
- 🔐 Secure user authentication using Clerk
- 🎟️ Interactive seat selection
- 💳 Secure online payment with Stripe
- 📧 Automatic booking confirmation emails
- 📱 Fully responsive UI for desktop and mobile
- ⚡ Fast and optimized user experience

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js

### Authentication
- Clerk Authentication

### Payment Gateway
- Stripe

### Email Service
- Brevo SMTP

### External API
- TMDB (The Movie Database)

---

## 🏗 Architecture

```
User
   │
   ▼
React Frontend
   │
   ▼
Node.js + Express Backend
   │
   ├── Clerk Authentication
   ├── TMDB API
   ├── Stripe Payment Gateway
   └── Brevo Email Service
```

---

## 🚀 Project Workflow

1. User signs in using Clerk Authentication.
2. Movies are fetched dynamically from TMDB API.
3. User selects a movie and preferred seats.
4. Booking details are sent to the backend.
5. Stripe securely processes the payment.
6. Booking is confirmed.
7. Confirmation email is sent automatically using Brevo.

---

## 📂 Project Structure

```
MovieGo
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── config/
│
└── README.md
```

---

## 💡 Key Learnings

This project helped me gain hands-on experience with:

- Full Stack Web Development
- REST API Development
- Authentication & Authorization
- Payment Gateway Integration
- Third-party API Integration
- Responsive UI Design
- Backend Architecture
- State Management
- Secure Web Development Practices

---



## 🔮 Future Improvements

- Admin Dashboard
- Movie Reviews & Ratings
- Coupon System
- Ticket Cancellation
- Real-time Seat Locking
- Booking History
- Recommendation System
- PWA Support

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📬 Contact

If you'd like to connect or discuss this project:


- GitHub: https://github.com/Sandeep-0507  
- Email: sandeepgugulothu772@gmail.com

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates me to build more projects and continue learning.

---

### Made with ❤️ using React.js, Node.js, Stripe, Clerk, and TMDB API.

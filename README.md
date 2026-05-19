# 🕌 Mosque Management Web App

A modern Islamic community web platform built with React.js and Tailwind CSS.  
This project provides prayer times, events, donations, Quran academy, and Qibla direction — all in one elegant UI.

---

## ✨ Features

### 🏠 Home / Hero Section
- Modern Islamic UI design
- Dynamic prayer info display
- Hijri date & Qibla info
- Responsive animated hero section

### 📚 Quran Academy
- Teachers listing
- Course selection system
- Enrollment modal
- Google Sheets integration (API)

### 📅 Events System
- Upcoming Islamic events
- Event details page
- Registration form with validation
- Google Apps Script backend support

### 🎓 Academy Courses
- Tajweed, Hifz, Fiqh, Hadith courses
- Interactive course cards
- Student enrollment system

### 💰 Donation System
- Multiple campaigns
- Progress tracking (goal vs raised)
- Mobile banking support:
  - bKash
  - Nagad
  - Rocket
  - Bank transfer
- Copy payment number feature

### 🧭 Qibla Direction
- Real-time geolocation support
- Compass-based Qibla direction
- Kaaba direction calculation algorithm
- Smooth animated rotation

### 📢 Notices & Announcements
- Islamic announcements board
- Categorized notices (Event, Ramadan, Janaza)

---

## 🛠️ Tech Stack

- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 📦 Lucide React Icons
- 🌐 Google Apps Script (Backend API)
- 📊 Google Sheets (Database)
- 📍 Geolocation API

---

## 📁 Project Structure
src/
├── components/
│ ├── Hero.jsx
│ ├── EventsSection.jsx
│ ├── DonateSection.jsx
│ ├── AcademySection.jsx
│ ├── QiblaDirection.jsx
│
├── data/
│ ├── eventsData.js
│
├── assets/
│ ├── hero.jpg
│
├── App.jsx
├── main.jsx



---

## 🚀 Getting Started

### 1. Clone the repository
bash
git clone https://github.com/your-username/mosque-web-app.git


2. Install dependencies
npm install
3. Run the project
npm run dev

live link: mosjidms.netlify.app

🔌 API Setup (Google Sheets)

This project uses Google Apps Script as a backend.

Example endpoint:

https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

You can:

Store enrollment data
Store event registrations
Track donations
🧠 Core Logic
🧭 Qibla Direction Formula

The Qibla direction is calculated using spherical trigonometry between user location and Kaaba (Makkah).



👨‍💻 Developer Information

Developer: SHEIKH SADI
Role: Full Stack Frontend Developer
Location: Bangladesh 🇧🇩

📌 Skills Used
React.js UI Development
Tailwind CSS Modern Design
API Integration (Google Sheets)
Islamic UX/UI Design System
Responsive Web Design
📧 Contact
Email: sheikhshaadi137@gmail.com
WhatsApp: +8801956686338
Portfolio: https://sheikhsadi.netlify.app
🌙 Project Vision

This project aims to build a digital Islamic ecosystem for mosques and communities — making Islamic education, donation, and communication easier for everyone.

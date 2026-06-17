# SJ Coatings — MERN Stack Industrial Website

A full-stack MERN (MongoDB, Express, React, Node.js) website for **SJ Coatings**, an industrial coatings business based in Pune, Maharashtra.

---

## ✨ Features

- **Animated Hero** with particle canvas background
- **About Section** with milestone timeline & certifications
- **Interactive Services** — tabbed panel with 6 coating services
- **Stats Counter** — animated countup on scroll
- **Project Gallery** — filterable grid with lightbox
- **Testimonials** — auto-rotating carousel with sidebar nav
- **Business Partners** — grid + scrolling marquee
- **Enquiry Form** — validated form with MongoDB backend
- **Footer** — 4-column with legal, CIN, GSTIN, copyright

**Color Palette:** Deep Red `#c0111a` · Charcoal Black `#0a0a0a` · Glass Blue `#b8d4e8` · Soft Pink-Red `#e8526a`

---

## 📁 Project Structure

```
sjcoatings/
├── client/               ← React frontend
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── App.css
│       └── components/
│           ├── Navbar.js / .css
│           ├── Hero.js / .css
│           ├── About.js / .css
│           ├── Services.js / .css
│           ├── Stats.js / .css
│           ├── Gallery.js / .css
│           ├── Testimonials.js / .css
│           ├── Partners.js / .css
│           ├── Enquiry.js / .css
│           └── Footer.js / .css
└── server/               ← Express backend
    ├── index.js
    ├── models/
    │   └── Enquiry.js
    └── routes/
        └── enquiry.js
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ ([download](https://nodejs.org))
- MongoDB Community Edition ([download](https://www.mongodb.com/try/download/community)) *(optional — site works without it)*
- npm v9+

---

### Step 1 — Install Dependencies

```bash
# From the sjcoatings root folder:
npm install
npm run install:all
```

Or manually:
```bash
cd server && npm install
cd ../client && npm install
```

---

### Step 2 — Configure Environment

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/sjcoatings
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@sjcoatings.com
```

> ⚠️ If MongoDB is not installed, the site still runs — enquiry form will show a connection error message.

---

### Step 3 — Run the App

**Option A — Run both together (recommended):**
```bash
npm run dev
```

**Option B — Run separately:**
```bash
# Terminal 1
npm run start:server

# Terminal 2
npm run start:client
```

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api/health

---

## 📸 Adding Real Project Photos

Replace the placeholder divs in `Gallery.js` with actual `<img>` tags:

1. Place your photos in `client/src/assets/` (e.g. `project1.jpg`)
2. In `Gallery.js`, import and use:
```jsx
import project1 from '../assets/project1.jpg';
// then inside the gallery item:
<img src={project1} alt="Refinery Anti-Corrosion Project" className="gallery__img" />
```

---

## 🔧 Customisation Checklist

| Item | Location |
|------|----------|
| Phone number | `Enquiry.js`, `Footer.js` |
| Email address | `Enquiry.js`, `Footer.js` |
| Office address | `Enquiry.js`, `Footer.js` |
| CIN / GSTIN | `Footer.js` |
| Company reg. no. | `Footer.js` |
| Est. year / ISO cert | `Hero.js`, `About.js` |
| Stats numbers | `Stats.js` |
| Testimonials | `Testimonials.js` |
| Partners list | `Partners.js` |
| Project photos | `Gallery.js` + `client/src/assets/` |
| Social media links | `Footer.js` |
| Google Maps embed | Add in `Footer.js` or new component |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/enquiry` | Submit a new enquiry |
| GET | `/api/enquiry` | List all enquiries (admin) |
| GET | `/api/enquiry/stats` | Enquiry count stats |
| GET | `/api/health` | Server health check |

---

## 🚢 Production Build

```bash
cd client && npm run build
```

Serve the `client/build` folder via Express in production by adding this to `server/index.js`:
```js
const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));
```

---

## 📜 Legal

- CIN: U45200MH2008PTC012345 *(update with actual)*
- GSTIN: 27AABCS1234F1Z5 *(update with actual)*
- © 2025 SJ Coatings. All Rights Reserved.

---

*Built with ❤️ for industrial excellence.*

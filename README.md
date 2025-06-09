# 🎬 PrimeClone

A **Prime Video-inspired streaming app clone** built using **React.js**, featuring a clean UI, dynamic movie data from TMDB, search, genre filters, and a custom watchlist.

---

## 🚀 Live Demo

> ![Image](https://github.com/user-attachments/assets/3b6bcc1a-4d9b-413e-94f4-438e76ad5db8)

---

## 📽️ Overview

**PrimeClone** replicates key features of popular video streaming platforms like Amazon Prime Video. It fetches real-time movie and TV show data from the **TMDB API**, allowing users to explore content by category, genre, or search — all within a smooth, responsive UI built in React.

---

## 🌟 Features

- 🎞️ **Home Page** with categorized scrollable movie rows
- 🔍 **Search functionality** with real-time results
- 📺 **Browse by Genre** (Action, Comedy, Drama, etc.)
- 📄 **Movie Details Page** with title, overview, and poster
- ❤️ **My List** page using React Context API (watchlist)
- 📱 Responsive layout for mobile and desktop
- 🧭 Sticky navigation bar with icons
- ⚡ Smooth transitions and hover effects

---

## 🧰 Tech Stack

| Layer         | Technology                       |
|---------------|----------------------------------|
| **Frontend**  | React.js, Tailwind CSS           |
| **Routing**   | React Router DOM                 |
| **Icons**     | React Icons                      |
| **Data/API**  | Axios + [TMDB API](https://www.themoviedb.org/documentation/api) |
| **State Mgmt**| React Context API                |

---

## 🛠️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/primeclone.git
   cd primeclone

2.**Install dependencies**

   npm install

3.**Add your TMDB API key**

  *In src/axios.js or as an environment variable:*

   const instance = axios.create({
     baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: "YOUR_TMDB_API_KEY",
      },
   });
4.**Run the app**
    npm start

📝 License
This project is open-source and free to use under the MIT License.

🙌 Acknowledgements
TMDB — for the open movie API

Tailwind CSS

React Icons

Built with ❤️ by Varna
---




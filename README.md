# Cinematic Rating System 🎬

A modern, high-performance web application for rating and reviewing movies with a stunning cinematic UI. Built with a focus on clean architecture and smooth user experience.

![Project Preview](https://via.placeholder.com/800x450.png?text=Cinematic+Rating+System+Preview)

## ✨ Features

- **🎬 Cinema Exploration**: Browse through a curated list of movies and cinematic works.
- **⭐ Interactive Rating**: Vote for your favorite movies with a beautiful, animated star rating system.
- **💬 Detailed Reviews**: Share your thoughts and read what others have to say.
- **🔍 Smart Filtering**: Filter movies by genre, release year, and live titile search.
- **🌐 Internationalization**: Full multi-language support (RU/EN) using `i18next`.
- **✨ Premium UI**: Responsive glassmorphism design with fluid animations.
- **🔄 State Management**: Robust state handling with `Zustand`.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Localization**: [i18next](https://www.i18next.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏗️ Architecture

The project follows the **Feature-Sliced Design (FSD)** methodology, ensuring high scalability and maintainability.

```text
src/
├── app/          # Initializing providers, global styles, and routing
├── pages/        # Compositional components for application pages
├── features/     # User-facing functionalities (ratings, filters, etc.)
├── entities/     # Business logic and UI components (cinema, user)
└── shared/       # Reusable UI components and utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rating-voting-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rating-voting-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📄 License

This project is licensed under the MIT License.

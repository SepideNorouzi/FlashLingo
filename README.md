# 🌸 FlashLingo

FlashLingo is a modern flashcard application designed to make my language learning simple, organized, and enjoyable.

The application allows users to organize vocabulary into projects, review flashcards through interactive study sessions, and track their learning progress with a clean and responsive interface.

Built with **React**, **TypeScript**, **Vite**, **Zustand**, and **TanStack Query**, the project focuses on scalable architecture, reusable components, and a smooth user experience.

---

## Features

- Organize flashcards into custom projects
- Create new flashcards through an intuitive modal
- Search flashcards
- Interactive flashcard study sessions
- Mark answers as correct or incorrect
- Track learned and review cards
- Responsive mobile-first design
- Demo/Admin repository architecture for future backend integration

---

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- React Router

### State Management

- Zustand

### Server State

- TanStack React Query

### Styling

- Tailwind CSS v4
- CSS Modules

### Icons

- Lucide React

---

## Architecture

FlashLingo separates data access from the UI through repositories.

```
Components
      │
      ▼
Hooks
      │
      ▼
Repository
      │
      ▼
Demo Repository / Admin Repository
      │
      ▼
Zustand Store
```

This approach makes it easy to switch between demo data and a real backend without changing the UI.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/SepideNorouzi/flashlingo.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Current Features

- Dashboard
- Flashcard Sessions
- Session Completion Screen
- Project Management
- Search Modal
- Settings Modal
- Add Flashcard Modal
- Responsive Desktop & Mobile Navigation
- Progress Statistics

---

## Future Improvements

- User Authentication
- Cloud Database
- Daily Review Goals
- Flashcard Images
- Audio Pronunciation
- Import / Export Decks
- Statistics Dashboard
- Dark Mode
- Offline Support
- Multi-language Support

---

## License

This project is intended for educational and portfolio purposes.
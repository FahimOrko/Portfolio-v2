# Personal Portfolio Website

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Installation & Setup](#installation--setup)
6. [Usage](#usage)
7. [Deployment](#deployment)
8. [License](#license)

---

## Overview

This is my personal portfolio website showcasing my skills, experience, and projects. It serves as a professional representation of my work and provides information for potential employers and collaborators. The website includes sections such as About, Experience, Skills, Projects, and Contact.

## Features

- Responsive and modern UI/UX design
- Interactive hero section with background video
- Dynamic project showcase with SVG icons
- Smooth animations and staggered text effects
- Organized code structure with reusable components

## Technologies Used

- **Frontend:** React, Vite, JavaScript, HTML, CSS
- **Styling:** Tailwind CSS
- **Icons & Assets:** Custom SVGs, images, and videos
- **Linting:** ESLint

## Project Structure

```

public/
src/
  ├── Components/
  │   ├── About/
  │   ├── Contact/
  │   ├── Expirence/
  │   ├── Hero/
  │   ├── Navbar/
  │   ├── Projects/
  │   ├── Skills/
  │   ├── Button.jsx
  │   ├── Footer.jsx
  │   ├── HeaderText.jsx
  │   ├── LinkButton.jsx
  │   ├── PageIcons.jsx
  │   ├── ParaText.jsx
  │   ├── StaggerdText.jsx
  ├── assets/
  ├── data/
  ├── App.jsx
  ├── main.jsx
  ├── index.css
```

## Installation & Setup

### Prerequisites

- Node.js and npm installed

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Open `http://localhost:5173` in your browser to view the portfolio in development mode.
- Modify components inside the `src/Components/` directory to customize sections.
- Update `src/data/` for adding new projects or changing existing details.

## Deployment

This project can be deployed using platforms like Vercel, Netlify, or GitHub Pages.

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to your preferred hosting service.

## License

This project is open-source and available under the MIT License.

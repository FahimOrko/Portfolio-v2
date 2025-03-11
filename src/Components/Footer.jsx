const Footer = () => {
  return (
    <footer className="fixed left-[32%] bottom-4 w-1/3 bg-card-bg-light backdrop-blur-sm shadow-lg py-2 lg:py-4 px-6 rounded-lg flex justify-center items-center gap-6 z-50">
      <a
        href="https://github.com/FahimOrko"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cosmic-cyan-start transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4 sm:h-6 sm:w-6"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.24-1.27-5.24-5.64 0-1.24.44-2.25 1.16-3.05-.12-.29-.5-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 2.86-.39c.97.01 1.95.13 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.61 1.58.23 2.75.11 3.04.72.8 1.16 1.81 1.16 3.05 0 4.39-2.7 5.34-5.26 5.63.41.36.78 1.08.78 2.17v3.22c0 .31.2.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/fahim-abrar-orko-2a211524a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cosmic-cyan-start transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4 sm:h-6 sm:w-6"
        >
          <path d="M20.45 20.45h-3.9v-5.64c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.96v5.74h-3.89V9h3.72v1.56h.05c.52-.98 1.79-2.01 3.68-2.01 3.94 0 4.67 2.6 4.67 5.99v5.91ZM5.34 7.44a2.26 2.26 0 1 1 0-4.52 2.26 2.26 0 0 1 0 4.52ZM7.3 20.45H3.38V9h3.92v11.45ZM22.22 0H1.78A1.78 1.78 0 0 0 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

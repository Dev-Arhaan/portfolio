import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; {new Date().getFullYear()} My Website. All rights reserved. |
        Designed by{' '}
        <a
          className="underline"
          href="https://www.linkedin.com/in/dev-arhaan-sayeed/"
        >
          Arhaan Sayeed
        </a>
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React and Next.js (App router and Server Actions), Typescript, Tailwind
        CSS, Framer Motion, React Email, Resend & Vercel Hosting
      </p>
    </footer>
  );
}

import React from 'react';
import Link from 'next/link';
const Contact = () => {
  return (
    <div className="container mx-auto">
    <nav className="bg-fuchsia-500 p-6">
      <ul className="flex space-x-5">
      <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Contact
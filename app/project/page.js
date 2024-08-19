import Link from 'next/link';
import React from 'react';
import Image from "next/image";


const Projects = () => {
  return (
    <div className="container mx-auto">
    <nav className="bg-blue-500 p-5">
      <ul className="flex space-x-5">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <br></br>
      <h1>My Projects</h1>
      <br></br>
      <Image
        src="/image/ai-image-generator-dogs.jpg"
        width={300}
        height={200}
        alt="Project"
        />
        <br></br>
        <p>
        "A web development project where I designed and built a responsive, user-friendly website. I focused on creating a seamless user experience and clean, efficient code using modern web technologies."</p>
      </div>
    );
  };
import React from 'react';
import Link from 'next/link';
import Image from "next/image";


const Home = () => {
    return (
      <div className="container mx-auto">
        <nav className="bg-lime-200 p-6">
          <ul className="flex space-x-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projets</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <br></br>
        <h1>Welcome to my Portfolio</h1>
        <br></br>
        <Image
          src="/image/my-portfolio/public/image/e21ce1137013957.Y3JvcCwxMzgwLDEwODAsNDEsMA.jpg"
          width={300}
          height={200}
          alt="Project"
        />
        <br></br>
        <hr></hr>
        <p>
          " Hi my name is sana I'm a passionate web developer specializing in creating modern,
          functional websites. I love turning ideas into intuitive user
          experiences using the latest web technologies and best practices."
        </p>
      </div>
    );
  };
  
  export default Home;
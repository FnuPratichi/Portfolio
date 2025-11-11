// import React from 'react';
// import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
// import { Typewriter } from 'react-simple-typewriter';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 overflow-hidden"
//       style={{ backgroundImage: "url('/bg.png')" }}
//     >
//       {/* Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse"></div>

//       {/* Main content */}
//       <div className="relative z-10 max-w-4xl text-center px-4 pt-24">
//         {/* Greeting */}
//         <h1 className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg leading-tight">
//           Hey there!{' '}
//           <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
//             I'm Pratichi
//           </span>
//         </h1>

//         {/* Typewriter */}
//         <h2 className="mt-4 text-yellow-200 text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-md">
//           <Typewriter
//             words={['Software Engineer', 'AI & Data Enthusiast', 'Problem Solver']}
//             loop
//             cursor
//             cursorStyle="_"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={2000}
//           />
//         </h2>

//         {/* About Text */}
//         <p className="mt-8 text-gray-300 text-xl sm:text-2xl drop-shadow-md max-w-3xl mx-auto">
//           {/* I'm a software engineer with a passion for AI and data, creating intelligent, scalable solutions that simplify complexity.  
//           Beyond coding, you'll find me exploring nature, cooking new recipes, cheering for cricket matches, or spending time with my dogs 🐾.  
//           I believe the best ideas come when curiosity meets creativity — whether it's in code or in life! */}

//           I’m a software engineer and AI enthusiast who gets a little too excited about experiments whether it’s in code, in the kitchen, or figuring out a new route while cycling around the neighborhood. 
//           When I’m not building projects, you might find me wandering peaceful spots, taking long walks, or hanging out with my dogs 🐾.
          
//           I’m passionate about software engineering and AI, always learning new techniques, sharpening my coding skills, and diving into system design. 
//           I love building things where I can play with ideas, watch them come to life, and yes, sometimes fail a few times before figuring it out—that’s part of the fun!
          
//           My quirks? I write about my learnings and experiences on Medium, refactor code just because something “feels off,” and I firmly believe a dog’s opinion on your project is valid. 
//           I’m looking for opportunities where I can grow in SWE / AI, keep experimenting, and work on projects that excite me (and maybe sneak in a little fun along the way).
//         </p>

//         {/* Social Icons */}
//         <div className="mt-12 flex justify-center space-x-8 sm:space-x-12 text-yellow-400 text-3xl sm:text-4xl">
//           <a href="https://github.com/FnuPratichi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
//             className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
//           >
//             <FaGithub />
//           </a>
//           <a href="https://www.linkedin.com/in/pratichi11/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
//             className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
//           >
//             <FaLinkedin />
//           </a>
//           <a href="https://leetcode.com/u/prat_noob/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"
//             className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
//           >
//             <FaCode />
//           </a>
//         </div>

//         {/* Profile Picture */}
//         <div className="mt-12 flex flex-col items-center w-full">
//           <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 pointer-events-none rounded-full"></div>
//             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse pointer-events-none rounded-full"></div>
//             <img
//               src={`${process.env.PUBLIC_URL}/profile.png`}
//               alt="Portrait of Pratichi"
//               className="relative w-full h-full object-cover rounded-full"
//             />
//           </div>

//           {/* Email CTA */}
//           <a
//             href="mailto:pratichi.lnu@gwu.edu"
//             className="mt-4 text-lg text-yellow-300 font-semibold hover:underline hover:text-yellow-400 transition"
//           >
//             📩 Shoot me an email at pratichi.lnu@gwu.edu
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center px-4 pt-24">
        {/* Greeting */}
        <h1 className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg leading-tight">
          Hey there!{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            I'm Pratichi
          </span>
        </h1>

        {/* Typewriter */}
        <h2 className="mt-4 text-yellow-200 text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-md">
          <Typewriter
            words={['Software Engineer', 'AI & Data Enthusiast']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {/* About Text */}
        <div className="mt-8 text-gray-300 text-xl sm:text-2xl drop-shadow-md max-w-3xl mx-auto space-y-4 text-left">
          <p>
            I’m a software engineer who loves experimenting with code and turning ideas into practical, reliable software. 
            I enjoy tackling challenging problems and building solutions that make an impact.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center space-x-8 sm:space-x-12 text-yellow-400 text-3xl sm:text-4xl">
          <a href="https://github.com/FnuPratichi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pratichi11/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/prat_noob/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <FaCode />
          </a>
        </div>

        {/* Profile Picture */}
        <div className="mt-12 flex flex-col items-center w-full">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 pointer-events-none rounded-full"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse pointer-events-none rounded-full"></div>
            <img
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt="Portrait of Pratichi"
              className="relative w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Email CTA */}
          <a
            href="mailto:pratichi.lnu@gwu.edu"
            className="mt-4 text-lg text-yellow-300 font-semibold hover:underline hover:text-yellow-400 transition"
          >
            📩 Shoot me an email at pratichi.lnu@gwu.edu
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

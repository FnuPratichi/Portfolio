import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'ICPC Foundation',
    location: 'Remote, USA',
    role: 'Software Intern',
    period: 'May 2025 – Present',
  },
  {
    company: 'Northeast Big Data Innovation Hub',
    location: 'Remote, USA',
    role: 'Data Science Researcher',
    period: 'October 2024 – January 2025',
  },
  {
    company: 'Amdocs Development Centre India LLP',
    location: 'Pune, India',
    roles: [
      {
        title: 'Experienced Software Engineer',
        date: 'May 2022 – October 2022',
      },
      {
        title: 'Software Engineer',
        date: 'December 2020 – May 2022',
      },
    ],
  },
];

const Journey = () => {
  return (
    <>
      {/* Logo Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10">
            {[
              { src: 'ICPC.png', alt: 'ICPC Foundation', title: 'ICPC Foundation' },
              { src: 'amdocs.png', alt: 'Amdocs', title: 'Amdocs' },
              { src: 'Comcast.png', alt: 'Comcast', title: 'Comcast' },
              { src: 'Hub.png', alt: 'TDSP', title: 'Transportation Data Science Project' },
              { src: 'GWU.png', alt: 'George Washington University', title: 'George Washington University' },
              { src: 'SPPU.png', alt: 'Savitribai Phule Pune University', title: 'Savitribai Phule Pune University' },
            ].map(({ src, alt, title }, index) => (
              <div
                key={index}
                className="w-28 h-28 sm:w-32 sm:h-32 bg-neutral-900 rounded-md flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/logos/${src}`}
                  alt={alt}
                  title={title}
                  className="object-contain w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="journey"
        className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-emerald-300 font-mono"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ⚙️ My Work Experience
          </motion.h2>

          <div className="relative border-l-4 border-emerald-400 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-14 ml-6 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
              >
                <div className="absolute w-4 h-4 bg-gradient-to-br from-sky-300 to-emerald-500 shadow-lg rounded-full -left-2 top-2 group-hover:scale-110 transition-transform" />

                {/* Company & Location */}
                <p className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                  {exp.company}{' '}
                  <span className="text-sm text-sky-400 font-medium ml-2">
                    | {exp.location}
                  </span>
                </p>

                {/* Role & Period */}
                {exp.role && (
                  <p className="text-base md:text-lg font-semibold text-indigo-300 mb-2">
                    {exp.role}{' '}
                    <span className="text-sm text-sky-400 font-normal ml-2">
                      | {exp.period}
                    </span>
                  </p>
                )}

                {/* Multi-role experience */}
                {exp.roles &&
                  exp.roles.map((role, rIndex) => (
                    <div key={rIndex} className="mt-2">
                      <p className="text-base md:text-lg font-semibold text-indigo-300">
                        {role.title}{' '}
                        <span className="text-sm text-sky-400 font-normal ml-2">
                          | {role.date}
                        </span>
                      </p>
                    </div>
                  ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;

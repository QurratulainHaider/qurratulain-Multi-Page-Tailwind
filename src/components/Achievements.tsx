import React from 'react';

function Achievements() {
  const achievements = [
    { number: "+200", label: "Courses" },
    { number: "50K", label: "Mentors" },
    { number: "370k", label: "Students" },
    { number: "100+", label: "Recognition" },
  ];

  return (
    <section className="py-8 xsm:py-12 px-4 text-center bg-white">
      <h1 className="text-2xl xsm:text-3xl font-bold mb-4">Our Achievements</h1>
      <p className="text-sm xsm:text-base text-gray-600 mb-6 xsm:mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>

      <div className="flex flex-col xsm:flex-row flex-wrap justify-center gap-6 xsm:gap-8">
        {achievements.map((item, index) => (
          <div key={index} className="text-center">
            <h2 className="text-3xl xsm:text-4xl font-bold mb-2">
              {item.number}
            </h2>
            <p className="text-xs xsm:text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

  export default Achievements;
  
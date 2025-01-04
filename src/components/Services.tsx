import React from 'react';
import { FaBook, FaBriefcase, FaBullhorn, FaCode, FaLaptop, FaLink, FaMicrophone, FaUserAlt } from 'react-icons/fa';

const courses = [
    { icon: FaCode, title: "Design & Development" },
    { icon: FaBullhorn, title: "Marketing" },
    { icon: FaLaptop, title: "Development" },
    { icon: FaMicrophone, title: "Communication" },
    { icon: FaLink, title: "Digital Marketing" },
    { icon: FaUserAlt, title: "Self Development" },
    { icon: FaBriefcase, title: "Business" },
    { icon: FaBook, title: "Finance" },
    { icon: FaBook, title: "Consulting" },
  ];
  

  function Services() {
    const courses = [
      { icon: FaCode, title: "Design & Development" },
      { icon: FaBullhorn, title: "Marketing" },
      { icon: FaLaptop, title: "Development" },
      { icon: FaMicrophone, title: "Communication" },
      { icon: FaLink, title: "Digital Marketing" },
      { icon: FaUserAlt, title: "Self Development" },
      { icon: FaBriefcase, title: "Business" },
      { icon: FaBook, title: "Finance" },
      { icon: FaBook, title: "Consulting" },
    ];
  
    return (
      <section className="py-8 xsm:py-12 px-4 text-center bg-white">
        <h1 className="text-2xl xsm:text-3xl font-bold mb-4">
          Explore Courses By Category
        </h1>
        <p className="text-sm xsm:text-base text-gray-600 mb-6 xsm:mb-8">
          Discover a wide range of courses covering various subjects, taught by
          expert instructors.
        </p>
        <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-4 xsm:gap-6">
          {courses.map(({ icon: Icon, title }, index) => (
            <div
              key={index}
              className="p-4 xsm:p-6 bg-gray-100 rounded-md shadow hover:shadow-lg transition duration-300"
            >
              <Icon className="text-3xl xsm:text-4xl text-gray-700 mb-4" />
              <h2 className="text-md xsm:text-lg font-semibold mb-2">
                {title}
              </h2>
              <p className="text-xs xsm:text-sm text-gray-500">
                50+ Courses Available
              </p>
            </div>
          ))}
        </div>
        <button className="mt-6 xsm:mt-8 px-4 xsm:px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition">
          View All Courses
        </button>
      </section>
    );
  }
  

export default Services
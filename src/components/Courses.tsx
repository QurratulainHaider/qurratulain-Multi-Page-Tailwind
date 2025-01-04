import Image from 'next/image';
import React from 'react';
import { CourseCards } from "@/constants/CourseCards";

function Course() {
  return (
    <>
      <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-4 xsm:gap-8 mt-4 xsm:mt-8">
        {CourseCards.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={300}
              className="w-full h-40 xsm:h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex flex-col xsm:flex-row justify-between items-start xsm:items-center">
                <p className="text-xs xsm:text-sm text-gray-500">
                  {course.category}
                </p>
                <p className="text-xs xsm:text-sm text-gray-500 flex items-center">
                  ⭐ {course.rating}
                </p>
              </div>
              <h2 className="text-lg xsm:text-xl font-bold mt-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{course.description}</p>
              <div className="flex flex-col xsm:flex-row justify-between items-start xsm:items-center mt-4">
                <button className="px-3 xsm:px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                  Enroll Now
                </button>
                <p className="text-md xsm:text-lg font-bold">${course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 xsm:mt-8">
        <button className="px-4 xsm:px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition">
          View All Courses
        </button>
      </div>
    </>
  );
}


export default Course;

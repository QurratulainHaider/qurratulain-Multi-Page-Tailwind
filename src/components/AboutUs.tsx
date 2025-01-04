import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Button } from './ui/button';

function AboutUs() {
  const teamData = [
    { img: "/images/team1.png", name: "James Nduku", role: "Marketing Coordinator" },
    { img: "/images/team2.png", name: "Sarah Smith", role: "UI/UX Designer" },
    { img: "/images/team3.png", name: "John Doe", role: "Software Engineer" },
    { img: "/images/team4.png", name: "Emily Davis", role: "Project Manager" },
    { img: "/images/team5.png", name: "Michael Brown", role: "Data Analyst" },
    { img: "/images/team6.png", name: "Sophia Taylor", role: "Content Creator" },
  ];

  return (
    <>
      <section className="
      w-full 
      py-[48px]  xsm:py-[112px] 
      text-center
      bg-headerColor
      ">
        <h1 className="my_h1 mb-[24px]">Our team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* cards Div */}
        <div className="
        w-full
        h-[723px] xsm:h-auto 
        grid 
        grid-cols-1 xsm:grid-cols-3 
        xsm:grid-rows-2 
        gap-x-[48px] 
        gap-y-[48px]  xsm:gap-y-[64px] 
        mt-[48px] xsm:mt-[80px]
        overflow-y-auto
        ">
          {teamData.map((member, index) => (
            <div className='flex flex-col justify-center' key={index}>
              <div className='inline-block m-auto mb-[24px]'>
                <Image src={member.img} alt={member.name} width={80} height={80} />
              </div>
              <h1 className='text-[20px] leading-[150%] font-semibold'>{member.name}</h1>
              <p className='text-[18px] leading-[150%] mb-[24px]'>{member.role}</p>
              <div className='flex gap-[14px] justify-center m-auto'>
                <FaLinkedin size={24} />
                <FaTwitter size={24} />
                <CiGlobe size={24} />
              </div>
            </div>
          ))}
        </div>

        <Button variant="transparentBtn" className='
        mt-[48px]
        xsm:hidden
        '>View All</Button>
      </section>
    </>
  );
}

export default AboutUs;
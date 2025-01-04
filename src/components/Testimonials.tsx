import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { testimonials} from "@/constants/TestimonialsCard";

function Testimonials() {
  return (
    <section
      className="w-full px-[24px] xsm:px-[64px] py-[112px]"
    >
      <h1 className="my_h1 mb-[24px]">Customer testimonials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Cards Div */}
      <div className="mt-[80px] w-full flex gap-[32px] flex-row overflow-x-auto">
        {/* Map through the testimonials array */}
        {testimonials.map((testimonial) => (
          <div
            className="shrink-0 grow-0 p-[32px] w-[362px] border-[1px] border-black"
            key={testimonial.id}
          >
            <div className="flex gap-1 mb-[24px]">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>

            <p className="mb-[24px]">{testimonial.feedback}</p>

            <div className="flex gap-[20px]">
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                />
              </div>

              <div className="h-full flex flex-col justify-start">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

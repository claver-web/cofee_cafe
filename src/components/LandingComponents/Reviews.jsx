import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const reviews = [
  {
    name: "Aarav Sharma",
    img: "/reviewsPeople/r1.jpeg",
    review: `My experience with this service was truly exceptional. The attention to detail and dedication to customer satisfaction stood out to me the most. Aarav, the representative I interacted with, went above and beyond to ensure that all my queries were addressed, and I felt valued throughout the process.`,
  },
  {
    name: "Ishita Verma",
    img: "/reviewsPeople/r2.jpeg",
    review: `I had a wonderful experience using this service, and I must say it completely exceeded my expectations. The team was extremely supportive and attentive to every little detail, ensuring that my requirements were not only met but surpassed.`,
  },
  {
    name: "Vihaan Mehta",
    img: "/reviewsPeople/r3.jpeg",
    review: `Working with this company was one of the best decisions I’ve made recently. The entire process was smooth and efficient, with every team member going out of their way to make sure I was satisfied.`,
  },
  {
    name: "Riya Kapoor",
    img: "/reviewsPeople/r4.jpeg",
    review: `I am so happy with the service I received from this company. From the beginning, Riya and her team were friendly, approachable, and focused on understanding exactly what I needed.`,
  },
  {
    name: "Arjun Reddy",
    img: "/reviewsPeople/r7.jpeg",
    review: `This company exceeded my expectations in every possible way. Arjun and his team demonstrated an impressive level of professionalism, dedication, and care.`,
  },
  {
    name: "Priya Desai",
    img: "/reviewsPeople/r8.jpeg",
    review: `I had an amazing experience working with this company. Priya from their team made me feel welcome and guided me through every step of the process with incredible patience and kindness.`,
  },
];

const CafeReviews = () => {
  return (
    <div className="bg-gradient-to-r from-amber-900 to-gray-900 rounded-2xl my-6 py-10 px-4 lg:px-12 text-amber-50">
      {/* Section Heading */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
        What Our Guests Say
      </h2>

      {/* Carousel */}
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        swipeable
        emulateTouch
        stopOnHover
        className="max-w-4xl mx-auto"
      >
        {reviews.map((items, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-black/20 rounded-2xl shadow-lg p-6 lg:p-10"
          >
            {/* User Image */}
            <img
              src={items.img}
              loading="lazy"
              className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover shadow-md border-4 border-amber-700 mb-6"
              alt={`Photo of ${items.name}`}
            />

            {/* Review Content */}
            <h3 className="text-lg md:text-xl font-semibold text-amber-300 mb-4">
              {items.name}
            </h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-100 max-w-2xl">
              {items.review}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CafeReviews;

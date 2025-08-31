import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import React, { useState } from "react";

const reviews = [
  {
    name: "Aarav Sharma",
    img: "/reviewsPeople/r1.jpeg",
    review: `My experience with this service was truly exceptional. The attention to detail and dedication to customer satisfaction stood out to me the most. Aarav, the representative I interacted with, went above and beyond to ensure that all my queries were addressed, and I felt valued throughout the process.`
  },
  {
    name: "Ishita Verma",
    img: "/reviewsPeople/r2.jpeg",
    review: `I had a wonderful experience using this service, and I must say it completely exceeded my expectations. The team was extremely supportive and attentive to every little detail, ensuring that my requirements were not only met but surpassed. Ishita, who was part of the support team, showed incredible patience and professionalism while guiding me through the process.`
  },
  {
    name: "Vihaan Mehta",
    img: "/reviewsPeople/r3.jpeg",
    review: `Working with this company was one of the best decisions I’ve made recently. The entire process was smooth and efficient, with every team member going out of their way to make sure I was satisfied. Vihaan, who was assigned as my point of contact, was polite, professional, and incredibly helpful. He made sure I had all the information I needed and responded to my questions quickly.`
  },
  {
    name: "Riya Kapoor",
    img: "/reviewsPeople/r4.jpeg",
    review: `I am so happy with the service I received from this company. From the beginning, Riya and her team were friendly, approachable, and focused on understanding exactly what I needed. `
  },
//   {
//     name: "Aditya Iyer",
//     img: "/reviewsPeople/r5.jpeg",
//     review: `This was my first experience with this company, and I am beyond satisfied with the service. Aditya, who handled my requirements, was incredibly professional, patient, and attentive. `
//   },
//   {
//     name: "Kavya Nair",
//     img: "/reviewsPeople/r6.jpeg",
//     review: `I am thoroughly impressed with the way this company operates. Kavya from the team ensured that I felt comfortable and informed throughout the entire process. `
//   },
  {
    name: "Arjun Reddy",
    img: "/reviewsPeople/r7.jpeg",
    review: `This company exceeded my expectations in every possible way. Arjun and his team demonstrated an impressive level of professionalism, dedication, and care.`
  },
  {
    name: "Priya Desai",
    img: "/reviewsPeople/r8.jpeg",
    review: `I had an amazing experience working with this company. Priya from their team made me feel welcome and guided me through every step of the process with incredible patience and kindness. `
  }
];

const CafeReviews = () => {

    return(
        <>
            <div className="bg-linear-to-r/hsl from-amber-800 to-black-100 rounded-2xl my-1">

                <h2 className="text-center text-3xl">People's Reviews For Being Here</h2>
                <br />

                <Carousel autoPlay infiniteLoop showThumbs={false} swipeable={false} swipeScrollTolerance={true}>
                    {reviews.map((items, index) => (

                    <div className="text-center p-4 shadow-3xl" key={index}>
                        <div className="flex justify-center">
                            <img 
                            src={items.img} 
                            className="rounded-full w-auto lg:w-40" 
                            alt="Image of User" />
                        </div>

                        <div className='p-2 lg:px-20'>
                            <h3>{items.name}</h3>
                            <p>{items.review}</p>
                        </div>
                    </div>

                    ))}
                </Carousel>

            </div>
        </>
    )
}

export default CafeReviews;
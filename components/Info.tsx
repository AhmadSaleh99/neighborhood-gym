import React from "react";

const data = [
  {
    id: 1,
    img: '/images/vector-1.png',
    title: 'Personalized Guidance',
    desc: 'Our trainers provide tailored workout plans and nutritional advice to help you achieve your specific goals.',
  },
  {
    id: 2,
    img: '/images/vector-2.png',
    title: 'State-of-the-Art Facilities',
    desc: 'We offer the latest equipment and a clean, modern environment to enhance your fitness experience.',
  },
  {
    id: 3,
    img: '/images/vector-3.png',
    title: 'Supportive Community',
    desc: 'Join a community of like-minded individuals who will motivate and support you on your fitness journey.',
  },
];

const Info = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-primary mb-8">
        We're Here for You{" "}
      </h2>

      <p>At Fitness Hub, we're committed to providing the resources and support you need to succeed.</p>

      <div className="flex flex-col md:flex-row gap-8 mt-6 max-w-6xl mx-auto ">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-1 rounded-2xl shadow-lg p-6  bg-light hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="w-[24px] mb-4  rounded-2xl"
            />
            <h1 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h1>
            <p className="text-dark text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;

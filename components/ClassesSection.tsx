import React from 'react';

const data = [
  {
    id: 1,
    img: '/images/strength.png',
    title: 'Strength Training',
    desc: 'Build muscle and increase your power with our comprehensive strength training programs.',
  },
  {
    id: 2,
    img: '/images/cardio.png',
    title: 'Cardio',
    desc: 'Improve your cardiovascular health and endurance with our dynamic cardio workouts.',
  },
  {
    id: 3,
    img: '/images/yoga.png',
    title: 'Youga',
    desc: 'Find balance and flexibility with our rejuvenating yoga sessions.',
  },
];

const ClassesSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Find Your Strength</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-1 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="w-full mx-auto mb-4"
            />
            <h1 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h1>
            <p className="text-light text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassesSection;
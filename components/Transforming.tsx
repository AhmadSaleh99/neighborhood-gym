import React from 'react'


const data = [
  {
    id: 1,
    img: '/images/transforming-1.png',
    title: 'From Couch to 5K',
    desc: 'Ethans journey from a sedentary lifestyle to completing a 5K race.',
  },
  {
    id: 2,
    img: '/images/transforming-2.png',
    title: 'Weight Loss Journey',
    desc: 'Olivias inspiring story of losing 50 pounds and gaining confidence.',
  },
  {
    id: 3,
    img: '/images/transforming-3.png',
    title: 'Building Strength',
    desc: 'Liams transformation from a beginner to a competitive weightlifter.',
  },
];
const Transforming = () => {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Transforming Lives</h2>

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
              className="w-full mx-auto mb-4 rounded-2xl"
            />
            <h1 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h1>
            <p className="text-light text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Transforming
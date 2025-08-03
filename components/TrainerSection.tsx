import React from 'react'


const data = [
  {
    id: 1,
    img: '/images/alex.png',
    title: 'Alex',
    desc: 'Specialist in strength and conditioning',
  },
  {
    id: 2,
    img: '/images/sam.png',
    title: 'sam',
    desc: 'Expert in cardio and endurance training',
  },
  {
    id: 3,
    img: '/images/sarah.jpg',
    title: 'Sarah',
    desc: 'Certified yoga instructor',
  },
];
const TrainerCard = () => {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Meet Our Trainers</h2>

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
              className="w-full mx-auto mb-4 h-70 rounded-2xl"
            />
            <h1 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h1>
            <p className="text-light text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrainerCard
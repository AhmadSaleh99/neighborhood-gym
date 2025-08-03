import React from 'react'
import Hero from './Hero'
import ClassesSection from './ClassesSection'
import TrainerCard from './TrainerSection'
import Transforming from './Transforming'
import Info from './Info'

const Home = () => {
  return (
    <main>
      <Hero />
      <ClassesSection />
      <TrainerCard />
      <Transforming />
      <Info />
      </main>
  )
}

export default Home
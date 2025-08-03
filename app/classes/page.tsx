import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'


export async function getClasses(){
  const classesSnapshot = await getDocs(collection(db,"classes"))
  return classesSnapshot.docs.map(doc=>({
    id:doc.id,
    title:doc.data().title,
    trainer:doc.data().trainer,
    capacity:doc.data().capacity,
    start:doc.data().start.toDate(),
    end: doc.data().end.toDate()
  }))
}

const Clases = async() => {

  const classes = await getClasses()
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1>Class Schedule</h1>
      
    </div>
  )
}

export default Clases
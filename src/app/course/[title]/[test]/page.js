import AboutLearning from '@/app/_components/AboutLearning/AboutLearning'
import Tags from '@/app/_components/Tags/Tags';
import React from 'react'

const page = () => {
  const categories =  ["Development", "Web Development", "Tailwind CSS"]; 
  return (
    <>
      <Tags tags={categories}/>
    </>
)
}

export default page
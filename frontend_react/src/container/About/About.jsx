import React,{useEffect,useState} from 'react'
import './About.scss'
import {motion} from 'framer-motion';
const abouts=[
  { title:'frontend development',description:'I am a good web developer.',imgUrl:''},
  { title:'backend development',description:'I am a good web developer.',imgUrl:''},
  { title:'full stack development',description:'I am a good web developer.',imgUrl:''},
  { title:'UI/UX Design',description:'I am a good web developer.',imgUrl:''}
];
const About = () => {
  return (
    <>
    <h2 className="head-text">
      I Know that
      <span> Good Design </span>
      <br/>
      means
      <span> Good Business</span>
    </h2>
    <div className='app__profiles'>
      {abouts.map((about,index)=>(
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5,type:'tween'}} 
        className='app__profile-item'
        key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
        </motion.div>
      ) )}
    </div>
    </>
  )
}

export default About
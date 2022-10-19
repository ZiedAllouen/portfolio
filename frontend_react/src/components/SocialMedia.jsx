import React from 'react';
import { BsGithub } from 'react-icons/bs';
import {FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/zied-allouen" target="_blank">
    <div>
      <FaLinkedinIn />
    </div>
    </a>
    <a rel="noopener noreferrer" href="https://github.com/ZiedAllouen" target="_blank">
    <div>
      <BsGithub />
    </div>
    </a>
    
  </div>
);

export default SocialMedia;
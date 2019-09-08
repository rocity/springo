import React, {useState} from 'react';
import styled from 'styled-components';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

export const intersectOptions = {
  threshold: window.innerWidth < 1024 ? 0 : 0.7,
  triggerOnce: true
}

const Sections: React.FC = () => {

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default Sections

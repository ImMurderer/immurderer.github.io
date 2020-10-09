
import React from 'react';
import { useWindowSize } from '@react-hook/window-size';
import StyledNav from './styled';

const Navbar = () => {
  const [width] = useWindowSize();
  return (
    <StyledNav width={width}>
      <a href="#Home">Home</a>
      <a href="#Portfolio">Portfolio</a>
      <a href="#Contact">Contact</a>
    </StyledNav>
  );
};

export default Navbar;
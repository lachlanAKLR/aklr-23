import React, { useState } from 'react';
import styled from 'styled-components';
import Layouts from './Layouts';

const SingleImageStyles = styled.div`
  .blocks {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    position: fixed;
    top: 0;
    right: 0%;
    z-index: 7001;
  }

  .home__layouts {
    width: 100%;
    position: fixed;
    right: 0%;
    transition: all ease 1s;
    background-color: white;
    z-index: 7000;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.25);
  }

  .active {
    right: 33.33%;
  }

  @media screen and (max-width: 599px) {
    .active {
      right: 100%;
    }
  }
`;

export default function HorizontalImages({ layouts, isActive }) {
  const [isLayout, setIsLayout] = useState(false);
  const handleHover = (event) => {
    setIsLayout((current) => !current);
  };

  const blocks = Array.from({ length: 100 }, (_, index) => (
    <div className="block" onMouseEnter={handleHover} key={index} />
  ));

  return (
    <SingleImageStyles>
      <div className={isActive ? 'blocks active' : 'blocks'}>{blocks}</div>
      <div className={isActive ? 'home__layouts active' : 'home__layouts'}>
        {isLayout ? (
          <Layouts layouts={layouts} />
        ) : (
          <Layouts layouts={layouts} />
        )}
      </div>
    </SingleImageStyles>
  );
}

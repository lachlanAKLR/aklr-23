import React from 'react';
import styled from 'styled-components';

const HoverGridStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%; 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  .block {
    width: 33.33%;
    height: 33.33%;
    /* border: 0.5px solid black; */
  }
  @media screen and (max-width: 599px) {
    display: none;
  }
`;

function showFirst() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[0];
  const caption = document.getElementsByClassName('photo_caption')[0];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideFirst() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[0];
  const caption = document.getElementsByClassName('photo_caption')[0];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showSecond() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[1];
  const caption = document.getElementsByClassName('photo_caption')[1];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideSecond() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[1];
  const caption = document.getElementsByClassName('photo_caption')[1];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showThird() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[2];
  const caption = document.getElementsByClassName('photo_caption')[2];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideThird() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[2];
  const caption = document.getElementsByClassName('photo_caption')[2];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showFourth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[3];
  const caption = document.getElementsByClassName('photo_caption')[3];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideFourth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[3];
  const caption = document.getElementsByClassName('photo_caption')[3];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showFifth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[4];
  const caption = document.getElementsByClassName('photo_caption')[4];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideFifth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[4];
  const caption = document.getElementsByClassName('photo_caption')[4];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showSixth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[5];
  const caption = document.getElementsByClassName('photo_caption')[5];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideSixth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[5];
  const caption = document.getElementsByClassName('photo_caption')[5];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showSeventh() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[6];
  const caption = document.getElementsByClassName('photo_caption')[6];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideSeventh() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[6];
  const caption = document.getElementsByClassName('photo_caption')[6];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showEighth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[7];
  const caption = document.getElementsByClassName('photo_caption')[7];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideEighth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[7];
  const caption = document.getElementsByClassName('photo_caption')[7];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

function showNinth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[8];
  const caption = document.getElementsByClassName('photo_caption')[8];
  hoverImage.style.opacity = '1';
  caption.style.opacity = '1';
}

function hideNinth() {
  const hoverImage = document.getElementsByClassName('gatsby-image-wrapper')[8];
  const caption = document.getElementsByClassName('photo_caption')[8];
  hoverImage.style.opacity = '0';
  caption.style.opacity = '0';
}

/* eslint-disable */
export default function HoverGrid() {
  return (
    <HoverGridStyles>
      <div onMouseOver={showFirst} onMouseLeave={hideFirst} className="block" />
      <div onMouseOver={showSecond} onMouseLeave={hideSecond} className="block" />
      <div onMouseOver={showThird} onMouseLeave={hideThird} className="block" />
      <div onMouseOver={showFourth} onMouseLeave={hideFourth} className="block" />
      <div onMouseOver={showFifth} onMouseLeave={hideFifth} className="block" />
      <div onMouseOver={showSixth} onMouseLeave={hideSixth} className="block" />
      <div onMouseOver={showSeventh} onMouseLeave={hideSeventh} className="block" />
      <div onMouseOver={showEighth} onMouseLeave={hideEighth} className="block" />
      <div onMouseOver={showNinth} onMouseLeave={hideNinth} className="block" />
    </HoverGridStyles>
  );
}

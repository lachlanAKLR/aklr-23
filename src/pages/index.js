import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Info from '../components/Info';
import ImageCarousel from '../components/ImageCarousel';
import Cursor from '../components/Cursor';
import PopUp from '../components/PopUp';

const HomeStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  top: 130px;
  padding: 5px 35px;
  text-transform: uppercase;
  position: fixed;
  z-index: 10;
  width: 100%;

  p {
    grid-column-start: span 7;
    max-width: 600px;
  }

  @media screen and (max-width: 599px) {
    padding: 5px 10px;

    p {
      grid-column-start: span 12;
      max-width: 500px;
    }
  }
`;

export const Head = () => (
  <>
    <title>AKLR</title>
    <meta name="description" content="Design Services" />
    <meta property="og:title" content="AKLR" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Design Services" />
    <meta
      property="og:image"
      content="https://i.ibb.co/0Y0hLM6/Social-Share.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function HomePage({ data }) {
  const { layouts } = data.images;
  const info = data.allSanityAbout.nodes[1]._rawContent;

  const [isActive, setIsActive] = useState(null);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <Cursor />
      <GlobalStyles />
      <PopUp />
      <Nav info={info} isActive={isActive} handleClick={handleClick} />
      <ImageCarousel layouts={layouts} isActive={isActive} />
      {/* <HorizontalImages layouts={layouts} isActive={isActive} /> */}
      <Info info={info} isActive={isActive} handleClick={handleClick} />
    </>
  );
}

export const query = graphql`
  query {
    images: sanityHomeImages {
      layouts {
        imageOne {
          asset {
            gatsbyImageData
          }
        }
        imageTwo {
          asset {
            gatsbyImageData
          }
        }
        caption
        format
        fullscreen
      }
    }
    allSanityAbout {
      nodes {
        _rawContent
        _key
        _id
      }
    }
  }
`;

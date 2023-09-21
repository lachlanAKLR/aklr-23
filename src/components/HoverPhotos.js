import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import HoverGrid from './HoverGrid';

const HoverBlock = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  padding: 100px 35px 20px 35px;

  .gatsby-image-wrapper {
    opacity: 0;
    width: 600px;
    position: absolute; 
    transition: 0.25s;
  }

  .gatsby-image-wrapper:nth-child(1) {
    width: 600px;
    top: 400px;
  }

  .gatsby-image-wrapper:nth-child(3) {
    width: 400px;
    height: 600px;
    right: 35px;
  }

  .gatsby-image-wrapper:nth-child(5) {
    width: 600px;
    height: 400px;
    bottom: 45px;
  }

  .gatsby-image-wrapper:nth-child(7) {
    width: 600px;  
    height: 400px;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  .gatsby-image-wrapper:nth-child(9) {
    width: 400px;
    height: 600px;
    bottom: 50%;
    right: 35px;
    transform: translate(0%, 50%);
  }

  .gatsby-image-wrapper:nth-child(11) {
    opacity: 0;
    width: 400px;
    height: 600px; 
    bottom: 150px;
    right: 100px;
  }

  .gatsby-image-wrapper:nth-child(13) {
    width: 400px;
    height: 600px;
    bottom: 150px;
    left: 100px;
  }

  .gatsby-image-wrapper:nth-child(15) {
    width: 600px;
    height: 400px;
    bottom: 45px;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .gatsby-image-wrapper:nth-child(17) {
    width: 600px;
    height: 400px;
    top: 150px;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  h2 {
    position: absolute;
    bottom: 20px;
    opacity: 0;
  }

  @media screen and (max-width: 599px) {
    padding: 300px 30px 100px 30px;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .gatsby-image-wrapper {
      opacity: 1;
      position: relative;
    }
    .gatsby-image-wrapper:nth-child(1),
    .gatsby-image-wrapper:nth-child(3),
    .gatsby-image-wrapper:nth-child(5),
    .gatsby-image-wrapper:nth-child(7),
    .gatsby-image-wrapper:nth-child(9),
    .gatsby-image-wrapper:nth-child(11),
    .gatsby-image-wrapper:nth-child(13),
    .gatsby-image-wrapper:nth-child(15),
    .gatsby-image-wrapper:nth-child(17) {
      height: auto;
      width: auto;
      top: auto;
      left: auto;
      bottom: auto;
      right: auto;
      transform: translate(0, 0);
    }
    .gatsby-image-wrapper:nth-child(3),
    .gatsby-image-wrapper:nth-child(5),
    .gatsby-image-wrapper:nth-child(9),
    .gatsby-image-wrapper:nth-child(11),
    .gatsby-image-wrapper:nth-child(13),
    .gatsby-image-wrapper:nth-child(15) {
      width: 250px;
      text-align: center;
    }
    h2 {
      position: relative;
      opacity: 1;
      padding: 30px 20px 100px 20px;
      text-align: center;
    }
  }
`;

function HoverImage({ photo }) {
  return (
    <>
      <GatsbyImage
        id={photo.id}
        image={photo.image.asset.gatsbyImageData}
        alt={photo.caption}
        imgStyle={{
          objectFit: "contain",
          objectPosition: "50% 50%",
        }}
      /> 
      <h2 className="photo_caption">{photo.caption}</h2>
    </>
  );
}

export default function HoverPhotos({ photos }) {
  return (
    <>
      <HoverGrid />
      <HoverBlock>
        {photos.map((photo) => (
          <HoverImage key={photo.id} photo={photo} id={photo.id} /> 
        ))}
      </HoverBlock>
    </>
  );
}

import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { CarouselItem } from './Carousel';

const SingleImageStyles = styled.div`
  .image__wrapper {
    width: 100%;
    height: 100vh;
  }

  .image__inner {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
    height: 100%;
    align-items: center;
    text-align: center;
  }

  .image__center {
    grid-column-start: 5;
    grid-column-end: 9;
  }

  .landscape {
    grid-column-start: 3;
    grid-column-end: 11;
  }

  .image__center .gatsby-image-wrapper,
  .image__right .gatsby-image-wrapper,
  .image__left .gatsby-image-wrapper {
    max-height: 90vh;
  }

  .image__full {
    grid-column-start: 1;
    grid-column-end: 13;
  }

  .image__full .gatsby-image-wrapper {
    height: 100vh;
  }

  .image__right {
    grid-column-start: 7;
    grid-column-end: 12;
  }

  .image__background {
    grid-column-start: 1;
    grid-column-end: 13;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
  }

  .image__background .gatsby-image-wrapper {
    height: 100vh;
  }

  @media screen and (max-width: 599px) {
    .active {
      right: 100%;
    }

    .image__inner {
      gap: 15px;
    }

    .image__center {
      grid-column-start: 3;
      grid-column-end: 11;
    }

    .image__right {
      grid-column-start: 5;
      grid-column-end: 12;
    }
    .landscape {
      grid-column-start: 2;
      grid-column-end: 12;
    }
  }
`;

export default function SingleImage({ block, index }) {
  const isLandscape = block.format === true;
  const isNotFull = block.position !== 'full';
  const isBackground = block.backgroundImage !== null;
  return (
    <CarouselItem>
      <SingleImageStyles>
        <div className="image__wrapper">
          <div className="image__inner">
            <div
              className={`image__${block.position} ${
                isNotFull && isLandscape ? 'landscape' : ''
              }`}
            >
              <GatsbyImage
                image={block.image.asset.gatsbyImageData}
                alt={block.caption}
                loading="eager"
                critical
              />
            </div>
            {isBackground && (
              <div className="image__background">
                <GatsbyImage
                  image={block.backgroundImage.asset.gatsbyImageData}
                  alt={block.caption}
                  loading="eager"
                  critical
                />
              </div>
            )}
          </div>
          <div className="image__caption">
            <p>{block.caption}</p>
          </div>
        </div>
      </SingleImageStyles>
    </CarouselItem>
  );
}

import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { CarouselItem } from './Carousel';

const TwoUpImageStyles = styled.div`
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
  }

  .image__one {
    grid-column-start: 3;
    grid-column-end: 7;
  }

  .image__two {
    grid-column-start: 7;
    grid-column-end: 11;
  }

  .image__inner .gatsby-image-wrapper {
    max-height: 90vh;
  }

  @media screen and (max-width: 599px) {
    .image__one {
      grid-column-start: 2;
      grid-column-end: 7;
    }

    .image__two {
      grid-column-start: 7;
      grid-column-end: 12;
    }
  }
`;

export default function TwoUpImage({ block, index }) {
  return (
    <CarouselItem>
      <TwoUpImageStyles>
        <div className="image__wrapper">
          <div className="image__inner">
            <div className="image__one">
              <GatsbyImage
                image={block.imageOne.asset.gatsbyImageData}
                alt={block.captionOne}
                loading="eager"
                critical
              />
            </div>
            <div className="image__two">
              <GatsbyImage
                image={block.imageTwo.asset.gatsbyImageData}
                alt={block.captionTwo}
                loading="eager"
                critical
              />
            </div>
          </div>
          <div className="image__caption">
            <p>{block.captionOne}</p>
          </div>
        </div>
      </TwoUpImageStyles>
    </CarouselItem>
  );
}

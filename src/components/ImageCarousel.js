import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled, { css } from 'styled-components';
import Carousel, { CarouselItem } from './Carousel';

const ImageCarouselStyles = styled.div`
  .home__layouts {
    width: 100%;
    position: absolute;
    right: 0%;
    transition: all ease 1s;
    background-color: white;
    z-index: 7000;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.25);
  }

  .active {
    right: 33.33%;
  }

  .carousel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    transition: all ease-in-out 0s;
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .carousel {
    height: 100vh;
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    transition: 1s all ease 0.25s;
  }

  .modal__wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .modal__image-wrapper {
    height: 100%;
    align-items: center;
    padding: 0 15px;
    position: absolute;
  }

  .modal__image-inner {
    display: flex;
    justify-content: center;
  }

  .carousel-item {
    position: relative;
  }

  /* .gatsby-image-wrapper img {
    height: calc(100vh - 150px);
  } */

  .landscape {
    grid-column-start: 3;
    grid-column-end: 11;
  }

  .portrait {
    grid-column-start: 5;
    grid-column-end: 9;
  }

  .two-up {
    grid-column-start: 3;
    grid-column-end: 11;
  }

  .two-up .gatsby-image-wrapper:nth-child(1) {
    margin-right: 15px;
  }

  .two-up .gatsby-image-wrapper:nth-child(2) {
    margin-left: 15px;
  }

  .full {
    grid-column-start: 1;
    grid-column-end: 13;
    min-height: 100vh;
    margin: 0 -30px;
  }

  .image-caption-wrapper {
    position: absolute;
    bottom: 15px;
    left: 0;
    padding: 0 15px;
    width: 100%;
    height: fit-content;
  }

  .gatsby-image-wrapper {
    max-height: 80vh;
  }

  .full .gatsby-image-wrapper {
    max-height: 100vh;
  }

  .number-caption {
    grid-column: span 2;
    padding-top: 2px;
  }

  .caption {
    grid-column: span 10;
  }

  .arrow-left {
    opacity: 0;
    position: fixed;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
  }

  .arrow-right {
    opacity: 0;
    position: fixed;
    height: 100%;
    width: 50%;
    top: 0;

    ${(props) =>
      props.isActive
        ? css`
            right: 33.33%;
          `
        : css`
            right: 0;
          `};
  }

  @media screen and (max-width: 599px) {
    .site__grid {
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;
    }

    .carousel {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }

    .arrow-right {
      ${(props) =>
        props.isActive
          ? css`
              right: -100%;
            `
          : css`
              right: 0;
            `};
    }
    .arrow-left {
      ${(props) =>
        props.isActive
          ? css`
              left: -100%;
            `
          : css`
              right: 0;
            `};
    }

    .active {
      right: 100%;
    }
    .gatsby-image-wrapper {
      max-height: 70vh;
    }

    .modal__image-wrapper {
      width: 100%;
      padding: 0 15px;
    }

    .carousel-image {
      padding-top: 0;
    }

    .landscape {
      grid-column-start: 1;
      grid-column-end: 7;
    }

    .portrait {
      grid-column-start: 1;
      grid-column-end: 7;
    }

    .two-up {
      grid-column-start: 1;
      grid-column-end: 7;
    }
    .two-up .gatsby-image-wrapper:nth-child(1) {
      margin-right: 5px;
    }

    .two-up .gatsby-image-wrapper:nth-child(2) {
      margin-left: 5px;
    }

    .full {
      grid-column-start: 1;
      grid-column-end: 13;
      min-height: 100vh;
      margin: 0 -15px;
    }

    .full .gatsby-image-wrapper img {
      max-height: 100vh !important;
    }

    .image-caption-wrapper {
      bottom: 120px;
      padding: 0 15px;
      display: block;
      display: none;
    }

    .caption {
      display: none;
    }
  }
`;

export default function ImageCarousel({ layouts, isActive }) {
  return (
    <ImageCarouselStyles isActive={isActive}>
      <div className={isActive ? 'home__layouts active' : 'home__layouts'}>
        <Carousel>
          {layouts.map((layout, index, array) => {
            const isTwoUp = layout.imageTwo != null;
            const isFull = layout.fullscreen === true;
            const isLandscape = layout.format === true;

            return (
              <CarouselItem layout={layout} key={index}>
                <div className="modal__wrapper">
                  <div className="modal__image-wrapper site__grid">
                    <div
                      key={index}
                      className={
                        isFull
                          ? 'modal__image-inner full'
                          : isLandscape
                          ? 'modal__image-inner landscape'
                          : isTwoUp
                          ? 'modal__image-inner two-up'
                          : 'modal__image-inner portrait'
                      }
                    >
                      <GatsbyImage
                        image={layout.imageOne.asset.gatsbyImageData}
                        alt={layout.caption}
                      />
                      {isTwoUp ? (
                        <GatsbyImage
                          image={layout.imageTwo.asset.gatsbyImageData}
                          alt={layout.caption}
                        />
                      ) : (
                        ``
                      )}
                    </div>
                    <div className="image-caption-wrapper site__grid">
                      <div className="number-caption">
                        {index + 1}/{array.length}
                      </div>
                      <div className="caption">{layout.caption}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </ImageCarouselStyles>
  );
}

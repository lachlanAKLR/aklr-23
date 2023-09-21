import React, { useState } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

const InfoStyles = styled.div`
  .info__content {
    position: fixed;
    height: 100%;
    width: 33.33%;
    bottom: 0;
    right: 0;
    padding: 25px 35px;
    background-color: #e8ebe4;
    transition: all ease 1s;
  }
  a {
    color: black;
  }
  p {
    text-transform: none;
    padding-bottom: 20px;
  }
  button p {
    padding-bottom: 0;
    text-transform: uppercase;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 10001 !important;
    border: 0.5px solid black;
    padding: 5px 10px;
    width: 70px;
    border-radius: 50px;
    backdrop-filter: blur(5px);
    background-color: rgba(220, 220, 220, 0.2);
    transition: all 1s ease;
  }

  button p:hover {
    background-color: rgba(220, 220, 220, 0.5);
  }

  .open {
    background-color: rgba(220, 220, 220, 0);
  }

  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 2px;
  }

  @media screen and (max-width: 599px) {
    button p {
      bottom: auto;
      top: 10px;
      right: 10px;
      padding: 2.5px 5px;
      width: 65px;
    }

    .info__content {
      width: 100%;
      padding: 50px 15px 15px 15px;
    }

    button p:hover {
      background-color: rgba(220, 220, 220, 0);
    }
  }
`;

export default function Info({ info, isActive, handleClick }) {
  return (
    <InfoStyles>
      <div className={isActive ? 'info__content show' : 'info__content hidden'}>
        <PortableText value={info} />
      </div>
      <button onClick={handleClick} type="button" className="close__button">
        <p className={isActive ? 'open' : 'close'}>
          {isActive ? 'Close' : 'Info'}
        </p>
      </button>
    </InfoStyles>
  );
}

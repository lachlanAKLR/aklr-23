import React, { useState, useEffect } from 'react';

import Arrow from '../images/Arrow.svg';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const [leftHover, setLeftHover] = useState(false);
  const [noHover, setNoHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
      document.addEventListener('mouseenter', mEnter);
      document.addEventListener('mouseleave', mLeave);
      document.addEventListener('mousedown', mDown);
      document.addEventListener('mouseup', mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
      document.removeEventListener('mouseenter', mEnter);
      document.removeEventListener('mouseleave', mLeave);
      document.removeEventListener('mousedown', mDown);
      document.removeEventListener('mouseup', mUp);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
      document.querySelectorAll('.arrow-right').forEach((el) => {
        el.addEventListener('mouseover', () => setRightHover(true));
        el.addEventListener('mouseout', () => setRightHover(false));
      });
      document.querySelectorAll('.arrow-left').forEach((el) => {
        el.addEventListener('mouseover', () => setLeftHover(true));
        el.addEventListener('mouseout', () => setLeftHover(false));
      });
      document.querySelectorAll('.info__content').forEach((el) => {
        el.addEventListener('mouseover', () => setNoHover(true));
        el.addEventListener('mouseout', () => setNoHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);
  return (
    <div
      className={`cursor ${hidden ? 'c--hidden ' : ' '}
      ${click ? 'c--click ' : ' '}${noHover ? 'c--small' : ' '}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <p>
        {/* {isOpen ? 'Close' : ''} */}
        {/* {isActive ? 'Close' : ''} */}
        {/* {leftHover ? `${(<Arrow />)}` : ''} */}
        <span
          className={`${rightHover ? 'c--right-hover c--arrow' : ' '}${
            leftHover ? 'c--left-hover c--arrow' : ' '
          }${noHover ? 'c--arrow ' : ' '}${linkHover ? 'c--arrow ' : ' '}`}
        >
          <Arrow />
        </span>
      </p>
    </div>
  );
};

export default Cursor;

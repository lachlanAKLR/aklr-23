import React from 'react';
import TwoUpImage from './TwoUpImage';
import SingleImage from './SingleImage';

export default function Layouts({ layouts }) {
  const Components = {
    twoUpImage: TwoUpImage,
    singleImage: SingleImage,
  };

  return layouts.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block,
        index,
      });
    }
  });
}

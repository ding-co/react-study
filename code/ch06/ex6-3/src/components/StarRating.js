import React, { useState } from 'react';
import Star from './Star';

const createArray = (length) => [...Array(length)];

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  console.log({ ...props });
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  );
}

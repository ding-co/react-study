import React, { useContext } from 'react';
import Color from './Color';
import { useColors } from '../hooks/color-hooks';

export default function ColorList({
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}

import { useState } from 'react';

const Star = ({ marked, starId }) => {
  return (
    <span
      data-star-id={starId}
      className="star"
      style={{
        color: '#ff9933',
        cursor: 'pointer'
      }}
      role="button"
    >
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

export const StarRating = ({ value }) => {
  const [rating, setRating] = useState(parseInt(value) || 0);
  const [selection, setSelection] = useState(2);

  const hoverOver = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('data-star-id'))
      val = event.target.getAttribute('data-star-id');
    setSelection(val);
  };
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(e) =>
        setRating(e.target.getAttribute('data-star-id') || rating)
      }
      onMouseOver={hoverOver}
      style={{ display: 'flex', padding: '0', margin: '0' }}
    >
      {Array.from({ length: 3 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

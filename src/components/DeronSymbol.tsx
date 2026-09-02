import React from 'react';

interface DeronSymbolProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export const DeronSymbol: React.FC<DeronSymbolProps> = ({
  color = '#111111',
  size = 100,
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Símbolo DERON"
    >
      <path
        d="M 17 20 C 17 17 19.5 15 22 15 C 24.5 15 27 17 27 20 L 27 80 C 27 83 24.5 85 22 85 C 19.5 85 17 83 17 80 Z M 34 15 C 60 15 74 30 74 50 C 74 70 60 85 34 85 L 34 73 C 53 73 64 63 64 50 C 64 37 53 27 34 27 Z M 34 33 C 44 33 52 40 52 50 C 52 60 44 67 34 67 L 34 56 C 39 56 42 53 42 50 C 42 47 39 44 34 44 Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

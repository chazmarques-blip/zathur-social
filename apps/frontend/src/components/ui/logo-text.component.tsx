import React from 'react';

// Zathur Social — wordmark tipográfico (padrão zathur.com: wordmark claro
// sobre fundo escuro, sem símbolo gráfico). "Zathur" em 700 + "Social" em 400.
export const LogoTextComponent = () => {
  return (
    <svg
      width="190"
      height="33"
      viewBox="0 0 190 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Zathur Social"
    >
      <text
        x="0"
        y="23"
        fontSize="24"
        letterSpacing="-0.5"
        fill="currentColor"
        style={{ fontFamily: 'inherit' }}
      >
        <tspan fontWeight="700">Zathur</tspan>
        <tspan fontWeight="400" dx="6">
          Social
        </tspan>
      </text>
    </svg>
  );
};

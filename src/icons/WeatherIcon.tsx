export const WeatherIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="100" height="100" rx="30" fill="white" />
    <rect width="100" height="100" fill="url(#pattern0_1637_468)" />
    <defs>
      <pattern
        id="pattern0_1637_468"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1637_468" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_1637_468"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

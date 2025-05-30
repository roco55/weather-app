interface ChevronDownProps {
  className?: string;
}
export const ChevronDown = ({ className }: ChevronDownProps) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1637_403)">
      <path
        d="M8.00072 12.5602C7.71397 12.5602 7.42725 12.4507 7.20863 12.2322L0.328989 5.35249C-0.108646 4.91486 -0.108646 4.20531 0.328989 3.76785C0.766447 3.33039 1.47586 3.33039 1.91353 3.76785L8.00072 9.8554L14.0879 3.76806C14.5256 3.33061 15.2349 3.33061 15.6723 3.76806C16.1102 4.20552 16.1102 4.91507 15.6723 5.35271L8.79281 12.2324C8.57408 12.451 8.28736 12.5602 8.00072 12.5602Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1637_403">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

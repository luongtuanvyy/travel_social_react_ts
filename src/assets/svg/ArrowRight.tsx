

const ArrowRight = (props: { size?: number }) => {
  const { size } = props;
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth={'2'} />
    </svg>
  );
};

export default ArrowRight;

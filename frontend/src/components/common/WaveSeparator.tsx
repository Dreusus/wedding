interface WaveSeparatorProps {
  variant?: 'top' | 'bottom';
}

export const WaveSeparator = ({ variant = 'bottom' }: WaveSeparatorProps) => {
  const paths = {
    top: 'M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z',
    bottom: 'M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  };

  return (
    <div className="svg-wrapper" style={{ position: 'relative', zIndex: 0 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="color-theme-svg no-gap-bottom"
      >
        <path fill="currentColor" fillOpacity="1" d={paths[variant]} />
      </svg>
    </div>
  );
};

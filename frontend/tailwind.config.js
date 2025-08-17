const spacing = {
  0: '0px',
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  bsm: '12px',
  bs: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
};

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing,
  },
  plugins: [],
};

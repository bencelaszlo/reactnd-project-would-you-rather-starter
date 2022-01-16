module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: [
        {
          'mytheme': {
            'primary': '#22abc6',
            'primary-focus': '#1a8499',
            'primary-content': '#f6f7f3',
            'secondary': '#af3d58',
            'secondary-focus': '#96344b',
            'secondary-content': '#f6f7f3',
            'accent': '#6895b0',
            'accent-focus': '#5a8199',
            'accent-content': '#f6f7f3',
            'neutral': '#1f1522',
            'neutral-focus': '#35243a',
            'neutral-content': '#f6f7f3',
            'base-100': '#f6f7f3',
            'base-200': '#dcddda',
            'base-300': '#a7a8a5',
            'base-content': '#1f2937',
            'info': '#2094f3',
            'success': '#009485',
            'warning': '#ff9900',
            'error': '#ff5724',
          },
        },
      ],
    },
  }
  
import { gwindTwBase, gwindTheme } from "gwind";  
  
const config = {  
  content: ['./public/index.html', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: 'class',  
  theme: {  
    ...gwindTheme,  
    container: {  
      ...gwindTheme.container,  
    },  
    fontSize: {  
      ...gwindTheme.fontSize,  
    },  
    fontWeight: {  
      ...gwindTheme.fontWeight,  
    },  
    colors: {  
      ...gwindTheme.colors,
    },  
    extend: {  
      ...gwindTheme.extend,  
      screens: {  
        mobile: '320px',  
        tablet: '720px',  
        laptop: '1080px',  
      }, 
    }, 
  },  
  plugins: [gwindTwBase],  
};  

console.log(gwindTheme);

export default config;  

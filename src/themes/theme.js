import { ThemeProvider } from 'styled-components';

import theme from "../constants/default.js";
import GlobalStyles from '../styles/GlobalStyles.js';



const Theme = ( { children } ) => (
		<ThemeProvider theme = {theme} >
				<GlobalStyles />
				{children}
		</ThemeProvider >
);

export default Theme;

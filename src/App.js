import React,{ Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './app.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#4460F1',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#FA3E3E',
      },
      info: {
          main: '#ff0000'
      }
    },
});

class App extends Component {

    render() { 
        return (
            <MuiThemeProvider theme={theme}>
                <Dashboard/>
            </MuiThemeProvider>
        );
    }
}
 
export default App;
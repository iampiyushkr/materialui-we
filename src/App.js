//import logo from './logo.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

import { Grids } from './component/components';
import { Components2 } from './component/components2';
import { Theme } from './component/Theme';
import purple from '@material-ui/core/colors/purple';

const theme1 = createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    }

  }
})

function App() {
  return (
    <div className="App">
      <Grids />
      <Components2 />
      <ThemeProvider theme={theme1}>
         <Theme/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;

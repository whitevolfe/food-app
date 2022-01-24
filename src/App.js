import { Grid } from '@mui/material';
import './App.css';
import Content from './Content';
import SearchAppBar from './Header';


function App() {
  return (
    <div className="App">
      <Grid container direction={"column"}>
        <Grid item>
        <SearchAppBar />
        </Grid>
      <Grid item container>

      <Grid item xs={0} sm={2} />
      <Grid item xs={12} sm={8}>
        <Content />
      </Grid>
      <Grid item xs={0} sm={2}/>

      </Grid>
      </Grid>
     
    </div>
  );
}

export default App;

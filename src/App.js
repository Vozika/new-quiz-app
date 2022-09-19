import "./App.css";
import initialData from "./id_data";
import Typography from '@mui/material/Typography';

function App() {

const Data = [...initialData];

console.log(Data);
console.log(Data[15]);

  return (
    <div className="App">
      
      <Typography variant="h1">New Quiz App<br /></Typography>
      <Typography variant="h3">{Data[27].capital}</Typography>
      
    </div>
  );
}

export default App;

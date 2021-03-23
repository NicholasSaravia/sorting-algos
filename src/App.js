import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import createArray from './methods';

function App() {

  const [array, setArray] = useState([])
  useEffect(() => {
    const arr = createArray(50);
    setArray(arr);
    return () => {
      
    }
  }, [])

  return (
    <div className="App">
      <div>
        <Button variant="contained" color="primary">Bubble Sort</Button>
      </div>
      <div>
      

      </div>
    </div>
  );
}

export default App;

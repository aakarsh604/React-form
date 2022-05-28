import React, {useState} from 'react';
import './App.css';
import Forms from './Components/Forms';
import Table from './Components/Table';

function App() {
  const [data, setdata] = useState([])

  return (
    <div className="App">
          <Forms setdata={setdata} data={data} />
          <Table data={data}/>
    </div>
  );
}

export default App;

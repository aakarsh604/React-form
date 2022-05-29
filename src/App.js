import React, {useState} from 'react';
import './App.css';
import Forms from './Components/Forms';
import Table from './Components/Table';

function App() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(0);
  const [total, settotal] = useState(0);

  return (
    <div className="App">
          <Forms setdata={setdata} data={data} page={page} setpage={setpage} settotal={settotal} total={total}/>
          <Table data={data} page={page} setpage={setpage} total={total}/>
    </div>
  );
}

export default App;

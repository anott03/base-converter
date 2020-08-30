import React, { useState, useEffect } from 'react';
import './App.scss';
import { Typography, MenuItem, FormControl, Select, Button} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
  const [inputNum, setInputNum]: [number, any] = useState(0);
  const [outputNum, setOutputNum]: [string, any] = useState('0');
  const [selectedBase, setSelectedBase]: [number, any] = useState(2);

  const bases = Array.from(Array(37).keys()).filter(n => n !== 0 && n !== 1);

  useEffect(() => {
    console.log((7).toString(2));
  }, []);

  const onInputNumChange = (e: any) => {
    e.target.value < 0 ? setInputNum(0) : setInputNum(parseInt(e.target.value));
  }

  const calculateConversion = (e: any) => {
    e.preventDefault();
    setOutputNum(inputNum.toString(selectedBase));
  }

  const onBaseChange = (e: any) => {
    setSelectedBase(e.target.value);
  }
  
  return (
    <div className="app">
      <div className="app__header">
        <h1 className='app__title'>Base Converter</h1>
        <div className="app__headerLinks">
          <a className="app__link" href="https://github.com/anott03/base-converter.git">
            <GitHubIcon />
            Github
          </a>
        </div>
      </div>

      <div className="app__body">

        <div className="app__conversionChoices">

          <Typography variant='h5' className='app__inputLabel' >Convert from base 10 to base</Typography>

          <FormControl className="app__dropdown">
            <Select className="app__dropdownSelect" variant="outlined"
              value={selectedBase} onChange={onBaseChange}>
              { bases.map((base: number, index: number) => (<MenuItem key={index} value={base}>{base}</MenuItem>)) }
            </Select>
          </FormControl>

        </div>

        <form className="app__inputForm" onSubmit={calculateConversion}>
          <div className="app__formInput">
            <Typography variant='h5' className='app__inputLabel' >Base 10</Typography>
            <input type="number" value={inputNum} onChange={onInputNumChange}/>
          </div>
          <Button type="submit" variant="contained" color="primary">Convert</Button>
        </form>
        <div className="app__output">
          { selectedBase == 2 ?
          <Typography variant='h5' className='app__inputLabel' >Binary</Typography>
          : <Typography variant='h5' className='app__inputLabel' >Base {selectedBase}</Typography>
          }
          {/* <input type="text" value={outputNum} disabled/> */}
          <p className="app__outputText">{outputNum}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

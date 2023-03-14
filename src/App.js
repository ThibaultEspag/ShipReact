import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option 1', 'Option 2'];


function App() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderOption={(props, option) => {
          console.log('props', props, option);
          return (
            <span {...props} style={{ backgroundColor: 'white' }}>
              {props.key}
            </span>
          );
        }}
        renderInput={(params) => <TextField {...params} label="Controllable" style={{color: 'red'}}/>}
      />
    </div>
        <p>Oh Lucie ça va?</p>
        <iframe src="https://giphy.com/embed/Pxqkke0OO5zUyRo9OF" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <button>Yes</button>
        <button>No</button>
      </header>
    </div>
  );
}

export default App;

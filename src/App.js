import React, {useState} from 'react';
import { CSVLink } from "react-csv";
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import GetAppIcon from '@material-ui/icons/GetApp';

function App() {


  const headers = [
    { label: "Operator Game Code", key: "operatorGameCode" },
    { label: "Operator Game Name", key: "operatorGameName" },
    { label: "Operator Game Type", key: "operatorGameType" }
  ];


  const [inputList, setInputList] = useState([{ operatorGameCode: "", operatorGameName: "", operatorGameType: "RNG" }]);

  const csvReport = {
    data: inputList,
    headers: headers,
    filename: 'importLeoJackpotGames.csv'
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
   const handleAddClick = () => {
     setInputList([...inputList, { operatorGameCode: "", operatorGameName: "", operatorGameType: "RNG" }]);
   };

  return (
    <div className="App">
      <h3>Import data to build the games import file</h3>

      {inputList.map((x, i) => {
        return (
          <div className="app__body">
            <input
              className="app__input"
              name="operatorGameCode"
   placeholder="Enter gameTitleUid"
              value={x.operatorGameCode}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="app__input"
              name="operatorGameName"
   placeholder="Enter Game Name"
              value={x.operatorGameName}
              onChange={e => handleInputChange(e, i)}
            />
          <div className="">
              {inputList.length !== 1 && <IconButton
                className="app__button"
                onClick={() => handleRemoveClick(i)}><RemoveIcon /></IconButton>}
              {inputList.length - 1 === i && <IconButton className="app__button" onClick={handleAddClick}><AddIcon /></IconButton>}
          </div>
          </div>
        );
      })}
      <CSVLink className="app__export" {...csvReport}><GetAppIcon />Export csv file</CSVLink><br /><br />

    </div>
  );
}

export default App;

import { useState } from 'react';
import NavBar from './components/NavBar'
import axios from 'axios';
import Timeline from './components/Timeline';
import './components/Tooltip.css';
import './components/Axis.css';

function App() {

  const [folderPath, setFolderPath] = useState('');
  const [processData, setProcessData] = useState<{ [key: string]: any }>({});

  const handleFolderSelection = async () => {
    setProcessData(() => {return {}});
    if(folderPath === '') {
      alert('Please enter a valid path');
      return;
    }
    await axios({
      method: 'post',
      url: 'http://localhost:5000/api/process_data',
      data: {
        folderPath: folderPath
      }
    }).then((response) => {
      console.log(response.data);
      setProcessData(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const onInputChange = (event: any) => {
      setFolderPath(() => (event.target.value));
  };

  return (
    <>
      <NavBar loaderFunc={async () => await handleFolderSelection()} onInputChange={onInputChange}/>
      <h2 style={{margin:"20px 30px"}}>MPI Function Timelines</h2>
      {Object.keys(processData).map((file: any) => {
        return <Timeline key={file} file={file} data={processData[file].data} overallStart={processData[file].start} overallEnd={processData[file].end} />
      })}
    </>
  )
}

export default App

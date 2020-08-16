import React, { useState } from 'react';

import Dropzone from './Components/Dropzone';
import Table from './Components/Table';

const App = () => {
  const [csvData, setCsvData] = useState([]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React CSV Reader</h1>
      <div className="container">
        <Dropzone onChange={setCsvData} />
        <Table items={csvData} />
      </div>
    </div>
  );
};

export default App;

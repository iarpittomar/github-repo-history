import React from 'react';
import { getCommmitHistory } from './API/getCommitHistory';

function App() {
  const fetchCommitHistory = () => {
    getCommmitHistory()
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchCommitHistory();
  }, []);

  return <div className='App'></div>;
}

export default App;

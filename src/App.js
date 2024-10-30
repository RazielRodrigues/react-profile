import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import List from './components/List';
import withListLoading from './components/withListLoading';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/RazielMiranda/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <div>

      <Navbar />
      <Main />
      {/* <ListLoading isLoading={appState.loading} repos={appState.repos} />  */}
    </div>
  );
}
export default App;


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ChatBotForm from './components/ChatBotForm';
import { setDomainOptions, setLevelOptions } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const fetchDomainsAndLevels = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/domainsAndLevels');
      const data = await res.json();
      if (res.ok) {
        dispatch(setDomainOptions(data.domains?.map(item => ({ value: item, level: item }))));
        dispatch(setLevelOptions(data.levels?.map(item => ({ value: item, level: item }))));
      } else {
        throw new Error('Failed to fetch domains and levels');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDomainsAndLevels();
  }, []);
  return (
    <div className="">
      <ChatBotForm />
    </div>
  );
}

export default App;

import './App.css';
import Menu from './modules/Left-Menu/Menu.jsx';
import Sidebar from './modules/Right-Sidebar/Sidebar.jsx';
import Tweets from './modules/Tweets/Tweets.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <Tweets />
      <Sidebar />
    </div>
  );
}

export default App;

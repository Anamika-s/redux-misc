import logo from './logo.svg';
import './App.css';
import { Parent } from './components/Parent';
import PureComponentDemo from './components/PureComponentDemo';
import UseMemo from './components/UseMemo';
import { Shop } from './components/Shop';
function App() {
  return (
    <div className="App">
      {/* <Parent/> */}
      {/* <PureComponentDemo/> */}
      {/* <UseMemo/> */}
      <Shop/>
           </div>
  );
}

export default App;

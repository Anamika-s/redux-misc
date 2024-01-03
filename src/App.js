import logo from './logo.svg';
import './App.css';
import { Parent } from './components/Parent';
import PureComponentDemo from './components/PureComponentDemo';
import UseMemo from './components/UseMemo';
import { Shop } from './components/Shop';
import Ajay from './components/Ajay';
import Vijay from './components/Vijay';
import { Shop1 } from './components/Shop1';
import Student1 from './components/Student1';
function App() {
  return (
    <div className="App">
      {/* <Parent/> */}
      {/* <PureComponentDemo/> */}
      {/* <UseMemo/> */}
      {/* <Shop1/> */}
      <Student1/>
      {/* <Ajay/>
      <Vijay/> */}
           </div>
  );
}

export default App;

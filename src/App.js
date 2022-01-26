 
import {useState} from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [modee,setmode]=useState('dark');
  const [alert,setalert]=useState(null);
  const showalert = (msg,type)=>{
    setalert({
       msg: msg,
       type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const switchmode=()=>{
    if (modee==='dark') {
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert('light mode activated','success');
    } else {
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showalert('dark mode activated','success');
    }
  }
  return (
    <> 
    {/* <Router> */}
<Navbar  mode={modee} switchmode={switchmode}/>
<Alert alert={alert} />
<div className="container">
{/* <Routes>
        <Route element={<About mode={modee}/>} path="/about" />
        
        <Route element={<Textform heading="ENTER YOUr  TEXT-FOR COUNT WORD,CHARACTER,COPY TEXT,REMOVE ALL EXTRA SPACE " showalert={showalert} />} path="/" />
         */}
         <Textform heading="ENTER YOUr  TEXT-FOR COUNT WORD,CHARACTER,COPY TEXT,REMOVE ALL EXTRA SPACE " showalert={showalert} />

        
{/* </Routes> */}
 {/*  */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;

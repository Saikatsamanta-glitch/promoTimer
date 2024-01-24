import './App.css';
import { useState } from 'react';
function App() {
  const [barstyle, setBarStyle] = useState("bees");
  const styles = ["crosses","jupiter","piano","dominos","pie","bees","food","floor","wiggle","bars","bubbles","ticTac","zigZag","stripes","clouds","aztec","circuit"];
  const [prog,setProg] = useState(0);
  const changestyle =(e)=>{
    setBarStyle(e.target.value)
  }

  const ondrag = (e)=>{
    console.log(e.clientX);
    setProg(e.clientX)
  }


  return (
    <>
      <div className="progress">
        <div style={{width:`${prog}px`}} className={`bar shadow ${barstyle}`}> <div className='selectable' onDrag={ondrag} draggable></div> </div>
      </div>
      <select className='selection' onChange={changestyle}>
        {
          styles.map((v,i)=>{
            return <option key={i} value={v}> {v} </option>
          })
        }
      </select>
    </>
  );
}

export default App;

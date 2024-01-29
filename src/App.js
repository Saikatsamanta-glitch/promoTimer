import './App.css';
import { useState } from 'react';
function App() {
  const [barstyle, setBarStyle] = useState("bees");
  const styles = ["crosses", "jupiter", "piano", "dominos", "pie", "bees", "food", "floor", "wiggle", "bars", "bubbles", "ticTac", "zigZag", "stripes", "clouds", "aztec", "circuit"];
  const [prog, setProg] = useState(7.5*30);
  const changestyle = (e) => { setBarStyle(e.target.value) };
  const handler = (e) => {
    const startSize = prog;
    const startPosition = e.pageX;
    console.log("startSize", startSize, "postion", startPosition)
    function onMouseMove(mouseMoveEvent) {
      if (startSize - startPosition + mouseMoveEvent.pageX <= 900 && startSize - startPosition + mouseMoveEvent.pageX >= 0) {
        setProg(startSize - startPosition + mouseMoveEvent.pageX)
      }

    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
    }
    document.body.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseup', onMouseUp, { once: true })
  }

  console.log(prog)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${prog}px` }} className={`bar shadow ${barstyle}`}>
          <button id='dragslide' onMouseDown={handler}> {(prog / 7.5).toFixed(1)} </button>
        </div>
      </div>

      <select className='selection' onChange={changestyle}>
        {
          styles.map((v, i) => {
            return <option key={i} value={v}> {v} </option>
          })
        }
      </select>
      <div className='customtimers '>
        <button className='selection' onClick={() => setProg(225)}>30min</button>
        <button className='selection' onClick={() => { setProg(450) }}>1hour</button>
        <button className='selection' onClick={() => { setProg(900) }}>2hour</button>
      </div>
      <div className='btncustom'>
        <button className='selections' onClick={() => setProg(prog-15*7.5)}>-15min</button>
        <button className='selections' onClick={() => { setProg(prog+15*7.5) }}>+15min</button>
      </div>
    </>
  );
}

export default App;

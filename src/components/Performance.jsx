import React,{useState} from 'react'
import './performance.css'
function Performance() {
    const [state , setState] = useState({
        state1: false,
        state2: false,
        state3: false
    })
    const handleOnChange=(e)=>{
       if(e.target.id === 'good'){
           setState ({
               state1: !state.state1,
               state2: false,
               state3: false,
           })
       }
       else if(e.target.id === 'cheap'){
           setState({
               state1: false,
               state2: !state.state2,
               state3: false
           })
       }
       else if (e.target.id === 'fast'){
           setState({
               state1: false,
               state2: false,
               state3: !state.state3
           })
       }
    }
  return (
    <>
        <h2>How do you want your project to be?</h2>
        <div className="toggle-container">
            <input type="checkbox" name="" id="good" checked={state.state1} className='toggle' onClick={handleOnChange} />
            <label htmlFor="good" className='label'>
                <div className="ball"></div>
            </label>
            <span>Good</span>
        </div>

        <div className="toggle-container">
            <input type="checkbox" name="" id="cheap" checked={state.state2} className='toggle' onClick={handleOnChange} />
            <label htmlFor="cheap" className='label'>
                <div className="ball"></div>
            </label>
            <span>Cheap</span>
        </div>

        <div className="toggle-container">
            <input type="checkbox" name="" id="fast" checked={state.state3} className='toggle' onClick={handleOnChange}/>
            <label htmlFor="fast" className='label'>
                <div className="ball"></div>
            </label>
            <span>Fast</span>
        </div>
    </>
  )
}

export default Performance
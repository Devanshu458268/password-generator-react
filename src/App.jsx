
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  var [length, setLength]= useState(12);
  var [numAllowed, setNumAllowed]=useState(false)
  var [charAllowed, setCharAllowed]=useState(false);
  var [password,setPassword]=useState("");
 

  useEffect(()=>{
    var pass="";
    var str= "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(numAllowed){
      str += "1234567890"
    }
    if(charAllowed){
    str+= "~`!@#$%^&*()_[]{};:'<>?,./"
    }

    for(var i=1;i<=length;i++){
      var index= Math.floor((Math.random()*str.length )+1)
      pass +=str[index]
    }
   setPassword(pass); 
  },[numAllowed, charAllowed,length])

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className='h-screen w-screen bg-black text-center p-3 text-2xl text-white '>
        Password Generator
        <div className='h-1/4 w-1/2 bg-slate-800 relative left-1/4 m-3 text-red'>
          <div className='rounded-md p-3 '>
            <input type="text"  
            placeholder='Password'
            value={password}
            className="text-black"/>
            <button onClick={copyToClipboard}>
              copy
            </button>
          </div>
          <div className='flex gap-4 p-4'>
            <input type="range"
            min={7} 
            max={12}
            onChange={function(e){
              console.log(e)
              setLength(e.target.value); // Used for getting values from slider
            }}
            /> 
            <label htmlFor="">Length {length}</label>

            <input type="checkbox"
            onChange={function(){
              console.log(numAllowed)
              setNumAllowed((prev)=>!prev)
              console.log(numAllowed)
            }}
            />
            <label htmlFor="">Number</label>
            
            <input type="checkbox"
            onChange={function(){
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="">Characters</label>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App

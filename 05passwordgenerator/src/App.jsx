import { useState , useCallback , useEffect, useRef} from 'react'


function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [Numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    window.navigator.clipboard.writeText(password);
  },[password]  )

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (Numbers) { str += "0123456789" }
    if (specialChars) { str += "!@#$%^&*()_+{}|:<>?-=[];,./`~" }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, Numbers, specialChars, setPassword]);


  useEffect(() => {
    generatePassword()
  },[length, Numbers, specialChars, generatePassword]);
  return (
  
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700"> 
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white my-3 rounded-lg " placeholder="Password" ref={passwordRef} readOnly />
          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min="8" max="56" value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label className="items-center gap-x-1">{length}</label>
          </div>
          <div className="flex items-center gap-x-1 mt-2">
            <input type='checkbox' id='numbers' checked={Numbers} onChange={(e) => {setNumbers((prev) => !prev);}} />
            <label className="flex items-center gap-x-1">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 mt-2">
            <input type='checkbox' id='specialChars' checked={specialChars} onChange={(e) => {setSpecialChars((prev) => !prev);}} />
            <label className="items-center gap-x-1">SpecialChars</label>
          </div>
        </div>
      </div>
  
  
  )
}

export default App

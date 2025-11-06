import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [Numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (Numbers) str += "0123456789";
    if (specialChars) str += "!@#$%^&*()_+{}|:<>?-=[];,./`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, Numbers, specialChars]);

  useEffect(() => {
    generatePassword();
  }, [length, Numbers, specialChars, generatePassword]);

return (
  <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-8 py-6 my-10 bg-gray-700 text-white">

    <h1 className="text-center text-2xl font-semibold mb-6">Password Generator</h1>

    {/* Password + Copy Button */}
    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        value={password}
        ref={passwordRef}
        readOnly
        className="w-full px-3 py-2 rounded-lg text-gray-900 outline-none bg-white"
      />
      <button
        onClick={copyPasswordToClipboard}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white focus:outline-none"
      >
        Copy
      </button>
    </div>

    {/* Range + Checkboxes on one line */}
    <div className="flex items-center justify-between gap-4">

      {/* Length Slider Section */}
      <div className="w-1/2">
        <label className="block text-sm mb-1">Length: {length}</label>
        <input
          type="range"
          min="8"
          max="56"
          value={length}
          className="w-full cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Checkboxes Section */}
      <div className="flex flex-col text-sm gap-3">

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={Numbers}
            onChange={() => setNumbers((prev) => !prev)}
            className="h-4 w-4 cursor-pointer"
          />
          Include Numbers
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={specialChars}
            onChange={() => setSpecialChars((prev) => !prev)}
            className="h-4 w-4 cursor-pointer"
          />
          Include Special Characters
        </label>

      </div>

    </div>

  </div>
);

}

export default App;

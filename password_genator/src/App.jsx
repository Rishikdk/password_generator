import { useState } from "react";

function App() {
  const [passport, setPassword] = useState("");

  const PassportGenerator = (length) => {
    const lowerLatter = "abcdefghijklmnopqrstuvwxyz";
  };

  const handelPassport = () => {
    const nerPassword = PassportGenerator(12);
    setPassword(newPassword);
  };

  return (
    <>
      <div className="Container">
        <h1>Passport Generator</h1>
        <input type="text" value={passport} />
        <button onClick={handelPassport}>Generate</button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [passport, setPassword] = useState("");

  const PassportGenerator = (length) => {
    const lowerLatter = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    for (let i = 0; i < length; i++) {
      const result = Math.floor(Math.random() * lowerLatter.length);
      password += lowerLatter.charAt(result);
    }
    return password;
  };

  const handelPassport = () => {
    const newPassword = PassportGenerator(12);
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

import { useState } from "react";

function App() {
  const [passport, setPassword] = useState("");

  const PassportGenerator = (length) => {
    const lowerLatter = "abcdefghijklmnopqrstuvwxyz";
    const UpperLatter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const SpecialLatter = "!@#$%^&*()_+=-";
    const NumberLatter = "0123456789";
    let allChar = "";
    let password = "";

    allChar = UpperLatter + lowerLatter + NumberLatter + SpecialLatter;

    for (let i = 0; i < length; i++) {
      const result = Math.floor(Math.random() * allChar.length);
      password += allChar.charAt(result);
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

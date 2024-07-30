import { useState } from "react";

function App() {
  const [passport, setPassword] = useState("");

  const PassportGenerator = (length) => {};

  const handelPassport = () => {};

  return (
    <>
      <div className="Container">
        <h1>Passport Generator</h1>
        <input type="text" value={passport} />
        <button onClick={handelPassport}></button>
      </div>
    </>
  );
}

export default App;

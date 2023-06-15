import { useState } from "react";
import { puppyList } from "./data.js";
function App() {
  console.log(puppies);
  const [puppies, setPuppies] = useState(puppyList);
  // const [selectedPuppy, setSelectedPuppy] = useState(null);
  return (
    <div>
      <p>
        <code></code>
      </p>
    </div>
  );
}

export default App;

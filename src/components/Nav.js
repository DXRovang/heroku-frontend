

import { useNavigate } from "react-router-dom";

export default function Nav() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/draws");
  }

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
  
}
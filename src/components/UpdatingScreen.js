import React, {useState} from 'react';

const UpdatingScreen = () => {
const [count, setCount] = useState(0);

const handleClick  = () => {
    setCount(count + 1);
}


  return (
    <div>UpdatingScreen
    <button onClick={handleClick}>
        Clicked {count} times
    </button>
    </div>
  )
}

export default UpdatingScreen
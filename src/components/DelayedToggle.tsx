import { useState, useCallback } from 'react';

const DelayedToggle = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const onToggle = useCallback(() => {
    setToggle2((prev) => !prev);
    setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 1000);
  }, []);

  return (
    <div>
      <button onClick={onToggle}>토글</button>
      <div>
        상태: <span>{toggle ? 'ON' : 'OFF'}</span>
      </div>
      {toggle && <div>야호!!</div>}
      {toggle2 && <div>Toggle2</div>}
    </div>
  );
};

export default DelayedToggle;

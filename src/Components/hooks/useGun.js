import { useEffect, useState } from "react";

const useGun = () => {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return [guns];
};

export default useGun;

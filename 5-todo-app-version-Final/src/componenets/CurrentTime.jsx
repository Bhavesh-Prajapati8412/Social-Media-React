import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p calssName="lead">
      Current Time and Date: {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;

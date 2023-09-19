import { useState, useEffect, useRef } from "react";

export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

function usePrevious(val) {
  const ref = useRef();

  useEffect(() => {
    // Assign val to the current property on the ref object
    ref.current = val;
  }, [val]); // Dependency array with 'val'

  // Return the previous value
  return ref.current;
}

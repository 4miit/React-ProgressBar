import { useEffect, useState } from "react";

export default function App() {
  const [bar, setBAr] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval running"); //  to check memory leak 

      setBAr((b: number) => {
        if (b >= 100) {
          clearInterval(interval);
          return b;
        }
        return b + 2;
      });
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    
           
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="progress"
        ></div>
    </div>
        
  );
}

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const App = () => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#0069b4b3",
        borderColor: "#0069b4",
        borderWidth: 1,
        hoverBackgroundColor: "#0069b447",
        hoverBorderColor: "#0069b4",
        data: [65, 59, 100, 81, 56, 55, 40],
      },
    ],
  });

  return (
    <div>
      <Bar
        data={data}
        style={{ width: "100%", height: "50%" }}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default App;

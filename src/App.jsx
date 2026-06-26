import { useState } from "react";
import "./index.css";
import { demoHabits } from "./utils/constants";
import logo from '/logo.png'

function App() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const [habitData, setHabitData] = useState({
  "Wake up early": {
      1:true,
      2:false,
      3:true
  },

  "Read": {
      1:true,
      2:true,
      3:false
  }
});

  return (
    <>
      <section className="bg-black/90 h-screen w-full">
        <nav className="text-center justify-self-center font-bold p-20 text-2xl text-white">
          <div className="flex items-center">
            <img src={logo} className="w-20" alt="" />Habit tracker
          </div>
          </nav>
        <div className="flex items-center justify-center">
          <div className="hero text-white/70">
            <table>
              <thead>
                <tr>
                  <th>Habits</th>

                  {days.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {demoHabits.map((habit, index) => (
                  <tr key={index}>
                    <td>{habit}</td>
 
                    {days.map((day) => (
                      <td key={day}>
                        <div className=" border  py-0.5 px-1 m-1 border-white">
                          <input type="checkbox" className="w-5 p-0 m-0" />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

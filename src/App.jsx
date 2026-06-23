import "./index.css";
import { demoHabits } from "./utils/constants";
import logo from '/logo.png'

function App() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

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
                          <input type="checkbox" className="w-6 h-6 " />
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

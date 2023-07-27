import { SchedulerContextProvider } from "./context/SchedulerContext";
import { Header } from "./components/Header";
import { Scheduler } from "./components/Scheduler";

import './app.scss';

function App() {
  return (
    <div className="app">
      <SchedulerContextProvider>
        <Header />
        <Scheduler />
      </SchedulerContextProvider>
    </div>
  );
}

export default App;

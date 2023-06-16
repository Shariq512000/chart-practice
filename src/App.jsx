import './App.css';
import Chart from './components/chart/Chart';
import ChartRadar from './components/chart2/RadarChart';
import ChartBar from './components/chart3/BarChart';
import Usa from './components/chart4/Usa';
import World from './components/chart5/World';

function App() {
  return (
    <div>
      <Chart />
      <div className='sho'>
        <ChartRadar />
      </div>
      <div className='sho'>
        <ChartBar />
      </div>
      <div>
        <Usa />
      </div>
      <div>
        <World />
      </div>
    </div>
  );
}

export default App;

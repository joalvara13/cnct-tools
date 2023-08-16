import AirEstimator from './Air Systems Calculator';
import './App.css';

function App() {
  return (  
    <div>
      <div class="logo-wrapper" data-content-field="site-title">
        <a href="https://cnct.design/"><img class="logo" src="/docs/cnct_v2.png" /></a>
      </div>
      
      <h1>Air Systems Calculator</h1>
      <AirEstimator />
    </div>
)};

export default App;
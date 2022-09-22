import ProgressBar from './ProgressBar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <ProgressBar
          data={[
            { name: 'Sold', color: '#BD1FBE', value: 677 },
            { name: 'Got free', color: '#FC64FF', value: 23 },
            { name: 'Burned', color: '#6CE355', value: 202 },
            { name: 'Free float', color: '#9DA3B7', value: 323 },
          ]}
          height={24}
          width={800}
        />
      </div>
    </div>
  );
}

export default App;

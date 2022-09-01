import Header from './components/Header';
import { TestDetailsProvider } from './contexts/testDetails';
import SpeedTestPage from './pages/speed-test/SpeedTestPage';

function App() {
  return (
    <div className="App">

      <Header/>
      <TestDetailsProvider>

        <SpeedTestPage/>

      </TestDetailsProvider>

    </div>
  );
}

export default App;

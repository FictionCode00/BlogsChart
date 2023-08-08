import logo from './logo.svg';
import './App.css';
import Routing from './routes/routing';
import Layout from './layout/layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routing />
      </Layout>
    </div>
  );
}

export default App;

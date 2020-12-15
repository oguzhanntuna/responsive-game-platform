import './App.css';
import Layout from './hoc/Layout/Layout';
import Filters from './components/HomePage/LeftPart/Filters/Filters';
import MainPart from './components/HomePage/MainPart/MainPart';
import Friends from './components/HomePage/RightPart/Friends/Friends';


function App() {
  return (
    <div className="App">
      <div className="Background">
      <Layout>
          <Filters />
          <MainPart />
          <Friends />
      </Layout>
      </div>
    </div>
  );
}

export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TotalPopulation from './components/TotalPopulation';
import TotalCountry from './components/TotalCountry';
import TopTenCountry from './components/TopTenCountry';

function App() {

  return (
    <>
      <Header />
      <TotalPopulation />
      <TotalCountry />
      <TopTenCountry />
    </>
  )
}

export default App

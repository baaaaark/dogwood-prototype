
// import Welcome from './components/Welcome';
import Header from './components/Header';
import Details from './components/Details';
import PhotoCarousel from './components/PhotoCarousel';

function App() {
  return (
    <div className='container'>
      <Header title='hello' />
      <PhotoCarousel title='photos' />
      <Details title='details' />
    </div>
  );
}

export default App;

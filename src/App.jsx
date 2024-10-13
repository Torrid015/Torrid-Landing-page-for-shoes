
import Header from './Header';
import PopularProduct from './PopularProduct';
import Footer from './sections/Footer';
import Hero from './sections/hero';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import SuperQuality from './sections/SuperQuality';
import Testimonials from './sections/Testimonials';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <PopularProduct />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

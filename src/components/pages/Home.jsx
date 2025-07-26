// components/Home.jsx
import HeroSection from '../HeroSection';
import Cities from '../Cities';
import OurVehicles from '../OurVehicles';
import OurServices from '../OurServices';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <OurVehicles />
      <Cities />
    </>
  );
};

export default Home;
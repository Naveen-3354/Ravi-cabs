// components/Home.jsx
import HeroSection from '../HeroSection';
import Cities from '../Cities';
import OurVehicles from '../OurVehicles';
import OurServices from '../OurServices';
import WhatsAppButton from '../WhatsappButton';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <OurVehicles />
      <Cities />
      <WhatsAppButton />
    </>
  );
};

export default Home;
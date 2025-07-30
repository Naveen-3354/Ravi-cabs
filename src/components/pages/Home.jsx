import HeroSection from '../HeroSection';
import Cities from '../Cities';
import OurVehicles from '../OurVehicles';
import OurServices from '../OurServices';
import WhatsAppButton from '../WhatsappButton';
import PhoneButton from '../PhoneButton';


const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <OurVehicles />
      <Cities />
      <WhatsAppButton />
      <PhoneButton />
    </>
  );
};

export default Home;
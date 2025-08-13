import HeroSection from '../HeroSection';
import Cities from '../Cities';
import OurVehicles from '../OurVehicles';
import OurServices from '../OurServices';
import WhatsAppButton from '../WhatsappButton';
import PhoneButton from '../PhoneButton';
import Reveal from '../Reveal';


const Home = () => {
  return (
    <>
      <HeroSection />
      <Reveal>
        <OurServices />
      </Reveal>
      <Reveal>
        <OurVehicles />
      </Reveal>
      <Reveal>
        <Cities />
      </Reveal>
      <WhatsAppButton />
      <PhoneButton />
    </>
  );
};

export default Home;
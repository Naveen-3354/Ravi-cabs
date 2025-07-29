import HeroSection from '../HeroSection';
import Cities from '../Cities';
import OurVehicles from '../OurVehicles';
import OurServices from '../OurServices';
import WhatsAppButton from '../WhatsappButton';
// import SubHeader from '../SubHeader';

const Home = () => {
  return (
    <>
      {/* <SubHeader /> */}
      <HeroSection />
      <OurServices />
      <OurVehicles />
      <Cities />
      <WhatsAppButton />
    </>
  );
};

export default Home;
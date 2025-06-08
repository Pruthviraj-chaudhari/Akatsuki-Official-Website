import Team from '../components/Team';
import Contact from '../components/Contact';
import Mission from '../components/Mission';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import LeadershipSection from '../components/LeadershipSection';
import GallerySection from '@/components/Gallery';
import { Navbar } from '@/components/Navbar';
import { HeroScrollDemo } from '@/components/HeroScrollDemo';
import AlumniBatch from '@/components/AlumniBatch';
// import About from '../components/About';

const Home = () => {
  return (
    <div className=" bg-transparent">
      <Navbar />
      <Hero />
      <div className="content">
        <Mission />
        <HeroScrollDemo />
        <AlumniBatch />
        <LeadershipSection />
        <Team />
        <GallerySection />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

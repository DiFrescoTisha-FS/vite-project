// import { useState } from 'react';
// import Sidebar from '../components/sidebar/Sidebar';
// import Navbar from '../components/navbar/Navbar';
// import Hero from '../components/hero/Hero';
import Artist from '../components/artistInfo/Artist';

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Artist />
    </div>
  )
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   console.log('toggle before:', isOpen); // Debugging line
  //   setIsOpen(!isOpen);
  //   console.log('toggle after:', isOpen); // Debugging line
  // };

  // console.log('render, isOpen:', isOpen); // Debugging line to check render state

  // return (
  //   <>
  //     <Sidebar isOpen={isOpen} toggle={toggle} />
  //     <Navbar toggle={toggle} />
  //   </>
  // );
};

export default Home;

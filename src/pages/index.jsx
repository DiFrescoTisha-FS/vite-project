// import React, { useState } from 'react'
import CommentSection from '../components/commentsection/CommentSection'
import Hero from "../components/hero/Hero"
import Thoughts from '../components/thoughts/Thoughts'


const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  // const toggle = () => {
  //   console.log("Toggle function called");
  //     setIsOpen(!isOpen);
  // };

  // const handleSignOut = async () => {
  //   try {
  //     const response = await fetch('http://localhost:4000/auth/logout', {
  //       method: 'POST',
  //       credentials: 'include',
  //     });
  //     if (response.ok) {
  //       setCurrentUser(null);
  //     } else {
  //       throw new Error('Logout failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during sign out:', error);
  //   }
  // };

  // const handleSignIn = (user) => {
  //   setCurrentUser(user);
  // };

  return (
    <div>
      {/* <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        currentUser={currentUser}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
      /> */}
      {/* <Navbar toggle={toggle} />
      <HeroSection />
      <ArtistInfo />
      <Music />
      <NewSection />
      <Thoughts /> */}
      <Hero />
      <Thoughts />
      <CommentSection />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//import './App.css'
import index from './index.css'
import Navbar from './components/Navbar'
import NavbarSmall from './components/NavbarSmall'
import Profile from './components/Profile'
import Footer from './components/Footer'

export default function App() {
  return (
    
    <>
    
    <Navbar />
      <NavbarSmall />
      <Profile />
      <Accordion />
      <Interests />
      <AlertBox />
      <StatusBox />
      <Post
        avatar="https://www.w3schools.com/w3images/avatar2.png"
        time="1 min"
        name="John Doe"
        text="Lorem ipsum dolor sit amet..."
        images={[
          { src: "https://www.w3schools.com/w3images/lights.jpg", alt: "Northern Lights" },
          { src: "https://www.w3schools.com/w3images/nature.jpg", alt: "Nature" }
        ]}
      />
      <Post
        avatar="https://www.w3schools.com/w3images/avatar5.png"
        time="16 min"
        name="Jane Doe"
        text="Lorem ipsum dolor sit amet..."
      />
      <Post
        avatar="https://www.w3schools.com/w3images/avatar6.png"
        time="32 min"
        name="Angie Jane"
        text="Have you seen this?"
        images={[{ src: "https://www.w3schools.com/w3images/nature.jpg", alt: "Nature" }]}
      />
      <RightColumn />
      <Footer />
    </>



  )
}


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { Box } from '@mui/material'
import Footer from './components/Footer'

function App() {
  const data = [
    {
      img: "https://source.unsplash.com/800x600/?sports/table-tennis",
      title: "Lorem Ipsum Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/cricket",
      title: "Lorem Ipsum Product 2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/rugby",
      title: "Lorem Ipsum Product 3",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/hockey",
      title: "Lorem Ipsum Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/football",
      title: "Lorem Ipsum Product 2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/cricket",
      title: "Lorem Ipsum Product 3",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },

  ];
  


  return (
    <>
     
     <Navbar/>
     <Box sx={{display : "flex", gap : "2vmax", flexWrap : "wrap" ,padding : "4vmax 1vmax", margin : "auto", justifyContent : "center" }}>
    {
      data.map(item => (
        <Card key={item.title} img={item.img} title={item.title} desc={item.description} price={item.price}/>
      ) )
    }
     </Box>
     <Footer/>
    </>
  )
}

export default App

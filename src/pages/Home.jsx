import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const data = [
    {
      img: "https://source.unsplash.com/800x600/?sports/table-tennis",
      title: "Lorem Ipsum Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/cricket",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/rugby",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/hockey",
      title: "Lorem Ipsum Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/football",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/cricket",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },

    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },

    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },

    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
  ];

  const { data: dimensions } = useSelector((state) => state.layout);
  const { rows, columns } = dimensions;
  const gridLayout = {
    display: "grid",
    gridTemplateColumns: { md: `repeat(${columns}, 1fr)`, xs: "1fr" },
    gridTemplateRows: { md: `repeat(${rows}, 1fr)`, xs: "1fr" },
    gap: "2vmax",
    margin: "3vmax",
    height : 'auto',
  };
  const displayedData = data.slice(0, columns * rows);

  return (
    <>
      <Navbar />

      <Header />
      <Box sx={gridLayout}>
        {}
        {displayedData.map((item, i) => (
          <Card
            key={i}
            img={item.img}
            title={item.title}
            desc={item.description}
            price={item.price}
          />
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default Home;

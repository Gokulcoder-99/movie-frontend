import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../components/Card';

const Banner = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Hero = styled.div`
  height: 45vh;
  width: 50vw;
`
const Image = styled.img`
  width: 100%;
  height: 40vh;
  background-color: green;
`
const Carddiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  grid-gap: 10px; 
`

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://moviesapi.ir/api/v1/movies');
      const data = await response.json();
      setMovies(data.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const renderSliderImages = () => {
    const limitedMovies = movies.slice(0, 6);
    
    return limitedMovies.map(movie => (
      <div key={movie._id}>
        <Image src={movie.poster} alt={movie.title} />
      </div>
    ));
  };
  

  const renderMovieCards = () => {
    return movies.map(movie => (
      <Card imageUrl={movie.poster} title={movie.title} />
    ));
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Banner>
        <Hero>
          <Slider {...settings}>
            {renderSliderImages()}
          </Slider>
        </Hero>
      </Banner>
      <h2>All movies</h2>
      <Carddiv>
      {renderMovieCards()}
      </Carddiv>
    </>
  );
}

export default Home;

import React from 'react'
import { Carousel } from '../components/Carousel';
import { Values } from '../components/Values';
import { Area } from '../components/AreaActing';
import { AboutHome } from '../components/AboutHome';

export const Home = () => {
  return (
    <>
    <Carousel/>
    <AboutHome/>
    <Values/>
    <Area/>
    </>
  )
}

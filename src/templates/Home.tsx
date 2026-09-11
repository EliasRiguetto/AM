import { Carousel } from "../components/Carousel";
import { Values } from "../components/Values";
import { Area } from "../components/AreaActing";
import { AboutHome } from "../components/AboutHome";
import { Reveal } from "../components/Reveal";

export const Home = () => {
  return (
    <>
      <Carousel />

      <Reveal direction="left">
        <AboutHome />
      </Reveal>

      <Reveal direction="right">
        <Values />
      </Reveal>

      <Reveal direction="up">
        <Area />
      </Reveal>
    </>
  );
};

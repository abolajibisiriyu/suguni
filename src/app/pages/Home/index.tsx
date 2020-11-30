import { FC } from "react";

import useAnimateOnScroll from "./hooks/useAnimateOnScroll";
import HeroSection from "./components/Hero";
import FormSection from "./components/FormSection";

const Home: FC = (props) => {
  useAnimateOnScroll({
    target: ".body .animate-on-scroll",
  });
  return (
    <div className="body">
      <HeroSection />
      <FormSection />
    </div>
  );
};

export default Home;

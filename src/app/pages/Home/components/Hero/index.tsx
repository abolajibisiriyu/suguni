import { FC } from "react";
import { Link } from "react-router-dom";

import { Nav, Hero, Image, TextSection } from "./styles";
import HomeButton from "../HomeButton";

const HeroSection: FC = (props) => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    window.scrollTo({
      top: document.getElementById("form-section")?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Nav>
        <div className="content">
          <Link to="/" className="logo text-24" title="logo">
            <img
              src="https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606597590/suguni/conifer-75.png"
              alt="icon"
            />
            Sugu<b>NI</b>
          </Link>
        </div>
      </Nav>
      <Hero className="animate-on-scroll">
        <TextSection>
          <h1 className="title">Create simple, responsive coming-soon pages</h1>
          <h2 className="sub-title">
            Free stunning customizable and responsive coming-soon , launch or
            count-down pages.
          </h2>
          <HomeButton
            as="a"
            href="#form-section"
            onClick={scrollToForm}
            className="see-how"
          >
            <span className="text-18 semi-bold">Get Started</span>
          </HomeButton>
        </TextSection>
        <Image>
          <img
            // src="https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606590080/suguni/conifer-181.png"
            src="https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606706487/suguni/Product_launch.png"
            alt="coming-soon illustration"
          />
        </Image>
      </Hero>
    </>
  );
};

export default HeroSection;

import { FC } from "react";

import Form from "app/models/Form";
import { AbstractContainer, Image, TextSection, TimerBoxes } from "./styles";
import useCountdown from "../../hooks/useCountdown";

interface Props {
  theme: Form;
}
const Abstract: FC<Props> = (props) => {
  const { theme } = props;
  const { days, hours, minutes, seconds } = useCountdown(theme.date);

  return (
    <AbstractContainer>
      <Image src="https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606678848/suguni/cyborg-7.png" />

      <TextSection>
        <h1 className="text-56">{theme.title}</h1>
        <TimerBoxes>
          <div className="timer-box">
            <h4 className="text-48">{days}</h4>
            <p>days</p>
          </div>
          <div className="timer-box">
            <h4 className="text-48">{hours}</h4>
            <p>hours</p>
          </div>
          <div className="timer-box">
            <h4 className="text-48">{minutes}</h4>
            <p>minutes</p>
          </div>
          <div className="timer-box">
            <h4 className="text-48">{seconds}</h4>
            <p>seconds</p>
          </div>
        </TimerBoxes>
        <p>{theme.message}</p>
      </TextSection>
    </AbstractContainer>
  );
};

export default Abstract;

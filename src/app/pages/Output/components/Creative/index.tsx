import { FC } from "react";

import Form from "app/models/Form";
import { BasicContainer, TimerBox } from "./styles";
import useCountdown from "../../hooks/useCountdown";

interface Props {
  theme: Form;
}
const Creative: FC<Props> = (props) => {
  const { theme } = props;
  const { days, hours, minutes, seconds } = useCountdown(theme.date);

  return (
    <BasicContainer data-testid={theme.theme}>
      <h1 className="text-56">{theme.title}</h1>
      <p>{theme.message}</p>
      <TimerBox>
        <div className="section">
          <h3 className="text-56">{days}</h3>
          <p>Days</p>
        </div>
        <div className="section">
          <h3 className="text-56">{hours}</h3>
          <p>Hours</p>
        </div>
        <div className="section">
          <h3 className="text-56">{minutes}</h3>
          <p>Mins</p>
        </div>
        <div className="section">
          <h3 className="text-56">{seconds}</h3>
          <p>Secs</p>
        </div>
      </TimerBox>
    </BasicContainer>
  );
};

export default Creative;

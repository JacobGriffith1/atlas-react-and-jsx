import dayIcon from "../assets/day.svg";
import eveningIcon from "../assets/evening.svg";
import nightIcon from "../assets/night.svg";

export default function Greeting() {
  const hour = new Date().getHours(); // 0-23

  let icon = nightIcon;
  let message = "Good Night!";

  if (hour >= 6 && hour <= 11) {
    icon = dayIcon;
    message = "Good Morning!";
  } else if (hour >= 12 && hour <= 16) {
    icon = dayIcon;
    message = "Good Afternoon!";
  } else if (hour >= 17 && hour <= 20) {
    icon = eveningIcon;
    message = "Good Evening!";
  }

  return (
    <h1 className="greeting">
      <img src={icon} alt="" />
      {" "}
      {message}
    </h1>
  );
}

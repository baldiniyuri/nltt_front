import "./home_style.css";
import { Presentation } from "./Components/presentation";


const Home = () => {
  return (
    <div className="home-body">
      <img
        src={"https://cdn-icons-png.flaticon.com/512/68/68882.png"}
        className="home-img"
        alt="Img-Home"
      />

      <span>{Presentation}</span>
    </div>
  );
};

export default Home;

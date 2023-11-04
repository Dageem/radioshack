import "./home.css";
import HomeFocal from "./HomeFocal";
import HomeHeader from "./HomeHeader";
import NewArrival from "./NewArrival";
import Options from "./Options";

function Home() {

  return (
    <div className="home__total-container">
      <HomeFocal />
      <HomeHeader />
      <NewArrival />
      <Options />
    </div>
  );
}

export default Home;

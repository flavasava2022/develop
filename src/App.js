import "./App.css";
import Header from "./component/Header";
import Menu from "./component/Menu";
import headerImg from "./assets/images/054e92cd499f15b8522b10a3805828da.jpg";
import AboutUs from "./component/AboutUs";
import { useRef } from "react";
import Measurements from "./component/Measurements";
import Graphs from "./component/Graphs";
import ProjectPref from "./component/ProjectPref";
import RealTimeChart from "./component/realTimeGraph";


function App() {
  const aboutRef = useRef(null);
  const MeasurementsRef = useRef(null);
  const GraphsRef = useRef(null);
  const ProjectPrefRef = useRef(null);

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="">
      <div className="main__sec  ">
        {/* <img className="" src={headerImg} alt='header_img' /> */}
        <Menu
          aboutRef={aboutRef}
          MeasurementsRef={MeasurementsRef}
          GraphsRef={GraphsRef}
          ProjectPrefRef={ProjectPrefRef}
          executeScroll={executeScroll}
        />
        <Header />
      </div>
      <div ref={ProjectPrefRef}>
        <ProjectPref />
      </div>

      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={MeasurementsRef}>
        <Measurements />
      </div>
      <RealTimeChart />
    </div>
  );
}

export default App;

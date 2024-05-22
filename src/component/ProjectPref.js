import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

const ProjectPref = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col items-center gap-4 py-8">
      <h2 className="font-bold text-[2.5em] text-[#F4B102] mb-10 ">
        Project Pref
      </h2>
      <div className="flex items-center  w-full  justify-around ">
        <div className="w-[30%] relative  w-[27em] h-[27em] ">
          <img
            className="w-[15em] h-auto absolute top-0 left-0 "
            src={img1}
            alt="img"
          />
          {/* <img
            className="w-[13em] h-[10em] absolute top-[10em] left-[10em]"
            src={img2}
            alt="img"
          /> */}
          {/* <img
            className="w-[17em] h-auto absolute top-[16em] -left-8"
            src={img3}
            alt="img"
          /> */}
          <img
            className="w-[15em] h-auto absolute top-[12em] left-[12em]"
            src={img4}
            alt="img"
          />
        </div>
        <div className=" w-[40%] ">
          <h3 className="font-semibold text-[2em] text-[#1793d3]">
            See Flood project
          </h3>

          <p className="">
            "Sea flood" Climate change is considered one of the most important
            challenges of the current era because of its effects on the
            environment. Therefore, Egypt included this in its strategic axes
            2030. The topic of the research project was chosen to design and
            implement an electronic unit to measure the rise in water levels in
            the Mediterranean Sea as a result of the melting of ice due to the
            differences in climate changes and the impact of these changes. The
            increase in water level in the agricultural areas adjacent to the
            sea, which may in the future cause a change in the crops that are
            currently being done. This electronic unit measures changes in
            height, analyzes them, and extracts the real changes. This unit
            works using micro sensors and using solar cells as its power source.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPref;

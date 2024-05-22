const Menu = ({ aboutRef, MeasurementsRef, GraphsRef,ProjectPrefRef, executeScroll }) => {
  return (
    <div className="p-[1em] flex items-center justify-center gap-[7em]">
      <a className="font-semibold text-[1.25em] ease-in-out duration-300  hover:underline decoration-wavy hover:text-[1.5em] hover:text-blue-500 hover:font-bold">
        Home
      </a>
      <a
        onClick={() => executeScroll(ProjectPrefRef)}
        className="font-semibold text-[1.25em] ease-in-out duration-300  hover:underline decoration-wavy hover:text-[1.5em] hover:text-blue-500 hover:font-bold"
      >
        Our project
      </a>
      <a
        onClick={() => executeScroll(MeasurementsRef)}
        className="font-semibold text-[1.25em] ease-in-out duration-300  hover:underline decoration-wavy hover:text-[1.5em] hover:text-blue-500 hover:font-bold"
      >
        Measurements
      </a>
      <a
        onClick={() => executeScroll(GraphsRef)}
        className="font-semibold text-[1.25em] ease-in-out duration-300  hover:underline decoration-wavy hover:text-[1.5em] hover:text-blue-500 hover:font-bold"
      >
        Graphs
      </a>
      <a
        onClick={() => executeScroll(aboutRef)}
        className="font-semibold text-[1.25em] ease-in-out duration-300  hover:underline decoration-wavy hover:text-[1.5em] hover:text-blue-500 hover:font-bold"
      >
        About Us
      </a>
    </div>
  );
};

export default Menu;

const AnimatedHeader = (props) => {
  const str = props.word;
  return str.split("").map((letter, i) => (
    <span
      className="lg:text-7xl sm:text-6xl text-4xl text-green-400 font-roboto transform transition duration-300 hover:scale-125"
      key={i}
    >
      {letter}
    </span>
  ));
};

export default AnimatedHeader;

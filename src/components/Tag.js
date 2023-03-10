const Tag = (props) => {
  return (
    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full mr-2 mb-2 font-roboto">
      {props.word}
    </div>
  );
};

export default Tag;

import AnimatedHeader from "../components/AnimatedHeader";

const BlogsList = () => {
  return (
    <div className="max-w-4xl p-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <h1 className="text-4xl font-extrabold sm:grid sm:gap-4 sm:grid-cols-2 sm:col-span-2 md:col-span-3 md:text-5xl md:grid-cols-3">
        <span className="flex md:col-span-2">
          <AnimatedHeader word={"Blog"} />
        </span>
      </h1>
      <p className="text-white font-source sm:row-start-2 sm:col-start-1 sm:self-center md:col-start-1 md:col-span-2 md:pr-10">
        Some thought pieces that I wrote for fun:
      </p>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <div className="h-16 bg-blue-500 hover:bg-green-500 sm:h-auto sm:aspect-square"></div>
      <p className="text-white font-source self-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, rem.
      </p>
    </div>
  );
};

export default BlogsList;

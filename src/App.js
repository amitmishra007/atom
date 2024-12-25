import Timer from "./components/timer";

function App() {
  return (
    <div className="bg-gradient-to-bl from-blue-400 via-blue-200 to-blue-400 w-screen h-screen flex flex-col items-center">
      <img
        className="sm:w-128 w-72 mx-11 mt-52"
        height="auto"
        src="./atom_logo.png"
        alt="atom_logo"
      />
      <h1 className="text-[#4A3563] text-3xl md:text-2xl sm:text-xl xs:text-sm mx-11 mt-12">
        Coming Soon ...
      </h1>
      <Timer />
    </div>
  );
}

export default App;

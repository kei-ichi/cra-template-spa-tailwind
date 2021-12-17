import logo from './logo.svg';

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <img
        src={logo}
        className="w-80 h-80 animate-[spin_5s_linear_infinite]"
        alt="React.js Logo"
      />

      <p>React SPA template with Tailwind CSS</p>

      <div className="flex justify-between items-center">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="m-5 px-10 py-2 border-2 border-cyan-400 rounded-sm hover:bg-cyan-400 hover:text-white transition"
        >
          React.js
        </a>

        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="m-5 px-10 py-2 border-2 border-cyan-400 rounded-sm hover:bg-cyan-400 hover:text-white transition"
        >
          Tailwind
        </a>
      </div>
    </div>
  );
}

export default App;

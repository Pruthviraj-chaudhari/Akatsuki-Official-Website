import { AiFillThunderbolt } from 'react-icons/ai'; // For a cool icon

const UnderMaintenance = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      {/* Akatsuki Logo */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="images/akatsukilogo.png" // Replace with the Akatsuki logo path
          alt="Akatsuki Coding Club"
          className="w-20 mb-4 animate-bounce"
        />
        <h1 className="text-4xl font-extrabold text-red-500 font-sans">Akatsuki Coding Club</h1>
      </div>

      {/* Main Message */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">We're currently working on something awesome!</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Our site is currently under maintenance. We'll be back shortly!
        </p>
        <div className="flex items-center justify-center gap-2">
          <AiFillThunderbolt className="text-yellow-500 w-8 h-8 animate-spin" />
          <span className="text-lg md:text-2xl font-semibold">Stay tuned for updates!</span>
        </div>
      </div>

      {/* Progress bar (just for aesthetic purposes) */}
      <div className="w-64 h-2 mt-8 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-red-500 animate-pulse"></div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Akatsuki Coding Club. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default UnderMaintenance;

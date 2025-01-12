import React from "react";

type ReplayButtonProps = {
  onClick: () => void;
};

const ReplayButton: React.FC<ReplayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 z-50"
    >
      Replay Preloader
    </button>
  );
};

export default ReplayButton;

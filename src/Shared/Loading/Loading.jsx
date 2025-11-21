import { SpinnerDiamond } from "spinners-react";

const Loading = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{ position: "relative", display: "block" }}
    >
      <div
        className="absolute"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <SpinnerDiamond size="100%" color="#454226" />
      </div>
    </div>
  );
};

export default Loading;

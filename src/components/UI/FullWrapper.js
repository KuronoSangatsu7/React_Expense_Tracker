import BackgroundImage from "../../bg.jpg";

const FullWrapper = (props) => {
  return (
    <div
      className="h-full overflow-scroll bg-gradient-to-tr from-pink-800 to-slate-900"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundClip: "content-box",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default FullWrapper;

import BackgroundImage from "../../bg.jpg";
import styles from './FullWrapper.module.css'

const FullWrapper = (props) => {
  return (
    <div
      className={`h-full overflow-scroll bg-gradient-to-tr from-pink-800 to-slate-900 ${styles.noscroll}`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundClip: "content-box",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </div>
  );
};

export default FullWrapper;

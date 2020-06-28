import style from "./style.css";

const Loader = ({ loading, children }) => (
  <div>
    <div class={loading ? style.loader : ""} />
    {children}
  </div>
);
export default Loader;

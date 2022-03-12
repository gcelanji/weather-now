import css from "./Background.module.css";

function Background(props) {
  return <div className={css.background}>{props.children}</div>;
}

export default Background;
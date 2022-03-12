import TopBar from "./TopBar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <TopBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;

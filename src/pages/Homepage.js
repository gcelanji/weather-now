import css from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={css.mainTextOut}>
      <p className={css.mainTextIn}>
        Welcome to Weather Now. Please select a city or use current location to
        view forecast!
      </p>
    </div>
  );
}

export default Homepage;

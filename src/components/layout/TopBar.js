import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import searchIcon from "../../images/search_icon.png";

import css from "./TopBar.module.css";

function TopBar() {
  const [place, setPlace] = useState([]);

  const navigate = useNavigate();
  function redirect() {
    const enteredLocation = place.label;
    console.log(enteredLocation);
    navigate("/show-weather?location=" + enteredLocation);
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();

  let day = d.getDate();
  let month = monthNames[d.getMonth()];
  let year = d.getFullYear();

  const today = day + " " + month + " " + year;

  return (
    <header className={css.header}>
      <div className={css.title}>
        <Link to="/" className={css.link}>
          <h1>Weather Now</h1>
        </Link>
      </div>
      <div className={css.searchBoxOut}>
        <div className={css.searchBoxIn}>
          <GooglePlacesAutocomplete
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            selectProps={{
              defaultInputValue: place, //set default value
              onChange: setPlace, //save the value gotten from google
              placeholder: "Search City",
              styles: {
                input: (provided) => ({
                  ...provided,
                  color: "#222222",
                }),
                option: (provided) => ({
                  ...provided,
                  color: "#222222",
                }),

                singleValue: (provided) => ({
                  ...provided,
                  color: "#222222",
                }),
              },
            }}
            onLoadFailed={(error) => {
              console.log(error);
            }}
          />
        </div>

        <button className={css.button} onClick={redirect}>
          <img src={searchIcon} className={css.searchIcon} />
        </button>
      </div>

      <div className={css.date}>
        <p>{today}</p>
      </div>
    </header>
  );
}

export default TopBar;

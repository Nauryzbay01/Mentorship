import style from "./mentorListBoard.module.css";
import MentorListCard from "../MentorListCard";

import { getMentorsList } from "../../services";

import { useEffect, useState } from "react";
import { listOfCountries, listOfMajors } from "../../constants";

const MentorListBoard = () => {
  const [mentorsList, setMentorsList] = useState();
  const [searchParams, setSearchParams] = useState("");
  const [selectCountryValues, setSelectCountryValues] = useState("");
  const [selectMajorValues, setSelectMajorValues] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMentorsList();
      setMentorsList(data);
    };
    fetchData();
  }, []);

  return (
    <div className={style.boardContainer}>
      <div className={style.searchBar}>
        <input
          type="text"
          placeholder="Search by University..."
          className={style.searchByUniversity}
          onChange={(event) => {
            setSearchParams(event.target.value);
          }}
        />
        <div className={style.countrySelectDiv}>
          <label htmlFor="country" className={style.selectLabel}>
            Country
          </label>
          <select
            name="country"
            id="country"
            defaultValue={""}
            className={style.countrySelect}
            onChange={(event) => {
              setSelectCountryValues(event.target.value);
            }}
          >
            <option value="">No Country</option>
            {listOfCountries.map((country) => {
              return (
                <option key={country} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <div className={style.majorSelectDiv}>
          <label htmlFor="major" className={style.selectLabel}>
            Major
          </label>
          <select
            defaultValue={""}
            name="major"
            id="major"
            className={style.majorSelect}
            onChange={(event) => {
              setSelectMajorValues(event.target.value);
            }}
          >
            <option value="">No Major</option>
            {listOfMajors.map((major) => {
              return (
                <option key={major} value={major}>
                  {major}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className={style.mentorListBoard}>
        {mentorsList
          ?.filter((mentor) => {
            if (searchParams === "") {
              return mentor;
            } else if (
              mentor.university
                .toLowerCase()
                .includes(searchParams.toLowerCase())
            ) {
              return mentor;
            }
          })
          .filter((mentor) => {
            if (selectCountryValues === "") {
              return mentor;
            } else if (
              mentor.country.toLowerCase() == selectCountryValues.toLowerCase()
            ) {
              return mentor;
            }
          })
          .filter((mentor) => {
            if (selectMajorValues === "") {
              return mentor;
            } else if (
              mentor.major.toLowerCase() == selectMajorValues.toLowerCase()
            ) {
              return mentor;
            }
          })
          .map((mentor) => {
            return <MentorListCard key={mentor.user.id} mentor={mentor} />;
          })}
      </div>
    </div>
  );
};

export default MentorListBoard;

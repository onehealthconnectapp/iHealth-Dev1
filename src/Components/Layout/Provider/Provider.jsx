import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Provider.css";
import axios from "axios";
//api url
import { getProviders } from "src/config/urls";

const Provider = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const options = ["Neurofibromatosis(NF)", "Select Disease"];
  // const ProviderData = [
  //   {
  //     title: "Speciality",
  //     text: "Select Speciality",
  //     icon: <ExpandMoreIcon sx={{ fontSize: 18, width: 20 }} />,
  //   },
  //   {
  //     title: "State",
  //     text: "Enter State",
  //     icon: <ExpandMoreIcon sx={{ fontSize: 16, width: 20 }} />,
  //   },
  // ];
  //set providers
  const [city, setCity] = useState([]);
  const [type, setType] = useState([]);
  // fetch data from server(api)
  useEffect(() => {
    const getSpecialty = async () => {
      const res = await axios.get(`${getProviders}`);
      setCity(res.data.fields.city);
      setType(res.data.fields.specialty);
    };
    getSpecialty();
  });
  // console.log(state);
  return (
    <div className="frame-container">
      <div className="input-wrapper">
        <div className="text-disease">
          <small className="disease-header">Disease</small>
          <div className="dropdown">
            <span
              className="dropdown-text"
              onClick={(e) => setIsActive(!isActive)}
            >
              {selected} <ExpandMoreIcon sx={{ fontSize: 16, width: 20 }} />
            </span>
            {isActive && (
              <div className="dropdown-content">
                {options.map((option) => (
                  <div
                    onClick={(e) => {
                      setSelected(option);
                      setIsActive(false);
                    }}
                    className="dropdown-item"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="patient-field">
            <input type="checkbox" />
            <label className="patient-status">Accepting new patients</label>
          </div>
        </div>

        {/* {ProviderData.map((data) => ( */}
        <>
          {/* <div className="disease"> */}
          <span className="specialty">Specialty</span>
          <select className="type">
            <option selected disabled>
              Select Specialty
            </option>
            {type.map((items) => (
              <option>{items}</option>
            ))}
          </select>
          <span className="city-header">City</span>
          <select className="city">
            <option selected disabled>
              City
            </option>
            {city.map((items) => (
              <option>{items}</option>
            ))}
          </select>
          {/* </div> */}
        </>
        {/* ))} */}
        <div className="search-donate">
          <div className="search-container">
            <button onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="search-btn">
              {" "}
              Search{" "}
              <SearchOutlinedIcon sx={{ fontSize: 12, marginLeft: 0.7 }} />{" "}
            </button>
          </div>
          <div className="frame-donate">
            <Link onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="donate-now">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;

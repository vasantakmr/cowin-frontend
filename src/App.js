import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";
import states from "./states.js";
function App() {
  return (
    <main>
      <h1 id="helloo">Subscribe for availability</h1>

      <br />

      <LoginForm />
      <br />
      <br />
     
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Centre Name</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className="insideTable">
          </tr>
        </tbody>
      </table>

    </main>
  );
}

function SubscribeForm(props) {

  let [allDists, setAllDists] = useState(null);
  allDists = [];
  var selectedDistrict;
  // Using state to keep track of what the selected fruit is
  let [statee, setStatee] = useState("⬇️ Select a State ⬇️");
  let [district, setDistrict] = useState("⬇️ Select a District ⬇️");
  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url:
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" +
        district +
        "&date=" +
        "04-05-2021",
      success: function (result) {
        console.log(result.centers);
        var auxArr2 = []
        var sessionArr = []
        $.each(result.centers, function (i, option) {
          console.log(result.centers[i].sessions);
          $.each(result.centers[i].sessions, function (j, option2) {
            sessionArr[j] =

              "<p>available capacity is : " + result.centers[i].sessions[j].available_capacity + "</p>, <p> min age is: " + result.centers[i].sessions[j].min_age_limit + "</p>, " + result.centers[i].sessions[j].vaccine + " ";
          });
          auxArr2[i] =
            "<p>" +
            result.centers[i].name + ", " + result.centers[i].block_name + ", " + result.centers[i].state_name + ", " + result.centers[i].pincode + sessionArr.join("") +
            "</p>";
        });
        $(".insideTable").html(auxArr2.join(""));
      },
    });
  };
  let handleStateChange = (e) => {
    $("#districtdd").empty();
    $("#districtdd").append("<option>-- Select a District --</option>");
    $.ajax({
      url:
        "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" +
        e.target.value,
      success: function (result) {
        if (result.isOk === false) alert(result.message);
        var auxArr2 = [];
        $.each(result.districts, function (i, option) {
          auxArr2[i] =
            "<option value='" +
            result.districts[i].district_id +
            "'>" +
            result.districts[i].district_name +
            "</option>";
        });
        $("#districtdd").append(auxArr2.join(""));
      },
    });
    setStatee(e.target.value);
  };
  let handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />


    </form>
  );
}


function LoginForm(props) {


  let [allDists, setAllDists] = useState(null);
  allDists = [];
  var selectedDistrict;
  // Using state to keep track of what the selected fruit is
  let [statee, setStatee] = useState("⬇️ Select a State ⬇️");
  let [district, setDistrict] = useState("⬇️ Select a District ⬇️");
  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url:
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" +
        district +
        "&date=" +
        "04-05-2021",
      success: function (result) {
        console.log(result.centers);
        var auxArr2 = []
        var sessionArr = []
        $.each(result.centers, function (i, option) {
          console.log(result.centers[i].sessions);
          $.each(result.centers[i].sessions, function (j, option2) {
            sessionArr[j] =

              "<p>available capacity is : " + result.centers[i].sessions[j].available_capacity + "</p>, <p> min age is: " + result.centers[i].sessions[j].min_age_limit + "</p>, " + result.centers[i].sessions[j].vaccine + " ";
          });
          auxArr2[i] =
            "<p>" +
            result.centers[i].name + ", " + result.centers[i].block_name + ", " + result.centers[i].state_name + ", " + result.centers[i].pincode + sessionArr.join("") +
            "</p>";
        });
        $(".insideTable").html(auxArr2.join(""));
      },
    });
  };
  let handleStateChange = (e) => {
    $("#districtdd").empty();
    $("#districtdd").append("<option>-- Select a District --</option>");
    $.ajax({
      url:
        "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" +
        e.target.value,
      success: function (result) {
        if (result.isOk === false) alert(result.message);
        var auxArr2 = [];
        $.each(result.districts, function (i, option) {
          auxArr2[i] =
            "<option value='" +
            result.districts[i].district_id +
            "'>" +
            result.districts[i].district_name +
            "</option>";
        });
        $("#districtdd").append(auxArr2.join(""));
      },
    });
    setStatee(e.target.value);
  };
  let handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  function activateLasers(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* Displaying the value of fruit */}
      {/*statee*/}
      <br />
      <div class="container">
        <div class="row">
          <select id="state-dd" className="form-select col-sm" onChange={handleStateChange}>
            <option value="⬇️ Select a State ⬇️"> -- Select a State -- </option>
            {states.map((fruit) => (
              <option value={fruit.state_id}>{fruit.state_name}</option>
            ))}
          </select>
          <select id="districtdd" className="form-select col-sm" onChange={handleDistrictChange}>
            <option value="⬇️ Select a District ⬇️">
              {" "}
              -- Select a District --{" "}
            </option>

            {allDists.map((fruit) => (
              <option value={fruit.district_id}>{fruit.district_name}</option>
            ))}
          </select>
          <input class="form-control mr-sm-2" name="date" required type="date" placeholder="Date (dd-mm-yyyy)"
            aria-label="Search" />
          <input class="form-control mr-sm-2" name="date" required type="email" placeholder="Enter your E-mail"
            aria-label="Search" />
          </div>
          <div class="row">
          <button type="submit" className="btn btn-danger myButton col-sm">
            Submit
          </button>
          <button onClick={activateLasers} className="btn btn-warning col-sm">
            Subscribe
          </button>
          {/*district*/}
          </div>
      </div>
    </form>
  );
}

export default App;


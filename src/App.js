import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";

function App() {
  // useEffect(() => {
  //   async function getDate() {
  //     const res = await fetch(
  //       "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=601203&date=04-05-2021"
  //     );
  //     const newDate = await res.text();
  //     setDate(newDate);
  //   }
  //   getDate();
  // }, []);
  return (
    <main>
      <h1 id="helloo">Subscribe for availability</h1>

      <br />
      
   
      <LoginForm />
         <br/>
         <br/>
      <SubscribeForm/>
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
               
                "<p>available capacity is : " +result.centers[i].sessions[j].available_capacity +"</p>, <p> min age is: "+result.centers[i].sessions[j].min_age_limit + "</p>, " + result.centers[i].sessions[j].vaccine + " "  ;
            });
          auxArr2[i] =
            "<p>" + 
            result.centers[i].name +", "+result.centers[i].block_name + ", " + result.centers[i].state_name + ", " + result.centers[i].pincode + sessionArr.join("") +
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

      <input class="form-control mr-sm-2" name="date" required type="email" placeholder="Enter your E-mail"
        aria-label="Search"/>
      <button type="submit" className="button myButton">
        Subscribe
      </button>
    </form>
  );
}


function LoginForm(props) {
  let states = [
    {
      state_id: 1,
      state_name: "Andaman and Nicobar Islands",
    },
    {
      state_id: 2,
      state_name: "Andhra Pradesh",
    },
    {
      state_id: 3,
      state_name: "Arunachal Pradesh",
    },
    {
      state_id: 4,
      state_name: "Assam",
    },
    {
      state_id: 5,
      state_name: "Bihar",
    },
    {
      state_id: 6,
      state_name: "Chandigarh",
    },
    {
      state_id: 7,
      state_name: "Chhattisgarh",
    },
    {
      state_id: 8,
      state_name: "Dadra and Nagar Haveli",
    },
    {
      state_id: 37,
      state_name: "Daman and Diu",
    },
    {
      state_id: 9,
      state_name: "Delhi",
    },
    {
      state_id: 10,
      state_name: "Goa",
    },
    {
      state_id: 11,
      state_name: "Gujarat",
    },
    {
      state_id: 12,
      state_name: "Haryana",
    },
    {
      state_id: 13,
      state_name: "Himachal Pradesh",
    },
    {
      state_id: 14,
      state_name: "Jammu and Kashmir",
    },
    {
      state_id: 15,
      state_name: "Jharkhand",
    },
    {
      state_id: 16,
      state_name: "Karnataka",
    },
    {
      state_id: 17,
      state_name: "Kerala",
    },
    {
      state_id: 18,
      state_name: "Ladakh",
    },
    {
      state_id: 19,
      state_name: "Lakshadweep",
    },
    {
      state_id: 20,
      state_name: "Madhya Pradesh",
    },
    {
      state_id: 21,
      state_name: "Maharashtra",
    },
    {
      state_id: 22,
      state_name: "Manipur",
    },
    {
      state_id: 23,
      state_name: "Meghalaya",
    },
    {
      state_id: 24,
      state_name: "Mizoram",
    },
    {
      state_id: 25,
      state_name: "Nagaland",
    },
    {
      state_id: 26,
      state_name: "Odisha",
    },
    {
      state_id: 27,
      state_name: "Puducherry",
    },
    {
      state_id: 28,
      state_name: "Punjab",
    },
    {
      state_id: 29,
      state_name: "Rajasthan",
    },
    {
      state_id: 30,
      state_name: "Sikkim",
    },
    {
      state_id: 31,
      state_name: "Tamil Nadu",
    },
    {
      state_id: 32,
      state_name: "Telangana",
    },
    {
      state_id: 33,
      state_name: "Tripura",
    },
    {
      state_id: 34,
      state_name: "Uttar Pradesh",
    },
    {
      state_id: 35,
      state_name: "Uttarakhand",
    },
    {
      state_id: 36,
      state_name: "West Bengal",
    },
  ];

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
               
                "<p>available capacity is : " +result.centers[i].sessions[j].available_capacity +"</p>, <p> min age is: "+result.centers[i].sessions[j].min_age_limit + "</p>, " + result.centers[i].sessions[j].vaccine + " "  ;
            });
          auxArr2[i] =
            "<p>" + 
            result.centers[i].name +", "+result.centers[i].block_name + ", " + result.centers[i].state_name + ", " + result.centers[i].pincode + sessionArr.join("") +
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
      {/* Displaying the value of fruit */}
      {statee}
      <br />

      <select id="state-dd" className="form-select" onChange={handleStateChange}>
        <option value="⬇️ Select a State ⬇️"> -- Select a State -- </option>
        {states.map((fruit) => (
          <option value={fruit.state_id}>{fruit.state_name}</option>
        ))}
      </select>
      <select id="districtdd" className="form-select" onChange={handleDistrictChange}>
        <option value="⬇️ Select a District ⬇️">
          {" "}
          -- Select a District --{" "}
        </option>

        {allDists.map((fruit) => (
          <option value={fruit.district_id}>{fruit.district_name}</option>
        ))}
      </select>
      <input class="form-control mr-sm-2" name="date" required type="date" placeholder="Date (dd-mm-yyyy)"
        aria-label="Search"/>
      <button type="submit" className="button myButton">
        Submit
      </button>
      {district}
    </form>
  );
}

export default App;


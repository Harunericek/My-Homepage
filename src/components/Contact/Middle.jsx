import React from "react";

function Middle() {
  return (
    <div className="middle-container">
      <div className="profile">
        <h1>Please Sign Up</h1>
      </div>
      <div>
        <form className="flex-container" action="onSubmit">
          <input className="item1" placeholder="Vorname" type="text" />
          <input className="item2" placeholder="Nachname" type="text" />
          <input className="item3" placeholder="Email" type="text" />
          <button className="navbtn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Middle;

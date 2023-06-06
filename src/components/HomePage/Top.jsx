import React from "react";
import Cloud from "../images/cloud.png"
import Mountain from "../images/mountain.png"


function Top() {
    return <div className="top-container">
        <img className="top-cloud" src={Cloud} alt="cloud-img"/>
        <h1>I´m Harun</h1>
<h2>a web designer</h2>
<img className="bottom-cloud" src={Cloud} alt="cloud-img"/>
<img className="mountain" src={Mountain} alt="mountain.img"/>
    </div>
}

export default Top;

/*<div className="top-container">
<img className="top-cloud" src="images/cloud.png" alt="cloud-img">

<h1>I´m Harun</h1>
<h2>a web designer</h2>

<img className="bottom-cloud" src="images/cloud.png" alt="cloud-img">
<img className="mountain" src="images/mountain.png" alt="mountain.img"/>
</div>*/
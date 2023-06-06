import React from "react";

function Bottom () {
    const now = new Date();
    const year = now.getFullYear();

    return <div className="bottom-container">
    <div className="footer">
    <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
    <a className="footer-link" href="https://twitter.com/">Twitter</a>
    <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
    <p>© {year} Harun Ericek.</p>
    </div>
    </div> 
}

export default Bottom;
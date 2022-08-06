import React from "react";
import "./seats.css";

export default function Seats(){
    return<>
    <div className="container">
        <form className="tkt">
        <div>
        <div className="tktss">
           <label className="seats-label">No.of.tickets</label><br/>
            <input className="seats-label"type="number"/><br/>
        </div>
        <div className="show">
            <label >Show Time</label><br/>
            <select>
                <option>12:30PM</option>
            </select>
         </div>
        </div>
        </form>
        <div id="seat-container">

        </div>
    </div>
    

    </>
}
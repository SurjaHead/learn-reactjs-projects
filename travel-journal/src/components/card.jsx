import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.item.imageUrl} className="card-img" alt="" />
        <div className="card-main">
          <div className="location">
            <img src="src/assets/location-icon.png" alt="" />
            <p>{props.item.title}</p>
            <a href={props.item.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
          <div className="description">
            <h1>{props.item.title}</h1>
            <h3>
              {props.item.startDate} - {props.item.endDate}
            </h3>
            <p>{props.item.description}</p>
          </div>
          <div />
        </div>
      </div>
      {props.item.title !== "New York City" && <div className="divider"></div>}
    </div>
  );
}

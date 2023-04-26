import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards--item">
        {/* <Link className="cards--item--link" to={props.path}>
              </Link> */}
        <a href={props.url} className="cards--item--link" target="_blank">
          <figure className="cards--item--pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Project Preview"
              className="cards--item--img"
            />
          </figure>

          <div className="cards--item--info">
            <h5 className="cards--item--text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../server.js";
import "./van.css";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-title">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt="car" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
      <div className="van-class">
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </div>
  ));

  return (
    <>
      <div className="vanLis-container">
        <h1>Explore our options </h1>
        <div className="van-list">{vanElements}</div>
      </div>
    </>
  );
}

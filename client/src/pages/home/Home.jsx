import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import Costs from "../../components/costs/Costs";
import "./home.css";
import { Context } from "../../context/Context";

import { axiosInstance } from "../../config";
import { useLocation } from "react-router";

export default function Home() {
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchCosts = async () => {
      if (user === null) {
        window.location.replace("/login");
      }
    };
    fetchCosts();
  }, []);
  return (
    <div>
      <Header />
      <div className="home">
        <Link className="btn" to="/write">
          ADD NEW COST
        </Link>
        <Link className="btn" to="/reports">
          REPORTS
        </Link>
      </div>
    </div>
  );
}

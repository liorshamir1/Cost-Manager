import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Costs from "../../components/costs/Costs";
import "./home.css";
import { Context } from "../../context/Context";

import { axiosInstance } from "../../config";
import { useLocation } from "react-router";

export default function Home() {
  const { user } = useContext(Context);
  const [costs, setCosts] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchCosts = async () => {
      if (user === null) {
        window.location.replace("/login")
      }
      else {
       var  res = await axiosInstance.get(`/costs?user=${user.username}`);
      }
      setCosts(res.data);
    };
    fetchCosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Costs costs={costs} />
      </div>


    </>
  );
}
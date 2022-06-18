import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Costs from "../../components/costs/Costs";
import "./home.css";
import {axiosInstance} from "../../config";
import { useLocation } from "react-router";

export default function Home() {
  const [costs, setCosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchCosts = async () => {
      const res = await axiosInstance.get("/costs" + search);
      setCosts(res.data);
    };
    fetchCosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Costs costs={costs} />     
      </div>
    

    </>
  );
}
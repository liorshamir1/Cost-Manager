import { useContext, useEffect } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./home.css";
import { Context } from "../../context/Context";

export default function Home() {
  const { user } = useContext(Context);

  // Allows permission only if we have an existing user
  useEffect(() => {
    const fetchCosts = async () => {
      if (user === null) {
        window.location.replace("/login");
      }
    };
    fetchCosts();
  }, [user]);
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

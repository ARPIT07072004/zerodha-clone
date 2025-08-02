import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { useUser } from "../UseContext";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [authenticated, setAuthenticated] = useState(false);
  const { setUsername } = useUser(); // use context here

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:5173";
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:8000",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;

        if (!status) {
          removeCookie("token");
          window.location.href = "http://localhost:5173";
        } else {
          setAuthenticated(true);
          setUsername(user); // 👈 set username globally
        }
      } catch (error) {
        removeCookie("token");
        window.location.href = "http://localhost:5173";
      }
    };

    verifyUser();
  }, [cookies, removeCookie, setUsername]);

  if (!authenticated) return null; // Render nothing while verifying

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;

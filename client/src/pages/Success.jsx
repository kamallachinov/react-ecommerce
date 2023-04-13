import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <p>Success</p>
      <button onClick={() => navigate("/")}>Back To Home</button>
    </div>
  );
};

export default Success;

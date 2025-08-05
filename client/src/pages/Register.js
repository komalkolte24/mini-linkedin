
import React, { useState } from "react";
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // You might also want to add handleSubmit here if it’s not written yet.

  return (
    <div>
      {/* Your form UI here */}
    </div>
  );
}

export default Register;

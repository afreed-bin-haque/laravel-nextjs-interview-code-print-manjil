"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    shop_name: "",
    shop_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const { data } = await axios.post("/api/registers", formData);
      console.log(data);
      if (data?.status) {
        console.log(data);
        setLoading(false);
      } else {
        setLoading(false);
        setMessage(data?.message);
      }
    } catch (exception) {
      setLoading(false);
      setMessage(exception?.message);
    }
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Register here</h2>
          {message && <p className="text-center text-green-500">{message}</p>}
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="afreed@printmanzil.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Shop Name
              <input
                type="text"
                name="shop_name"
                className="grow"
                placeholder="Your shop name"
                value={formData.shop_name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Shop Password
              <input
                type="password"
                name="shop_password"
                className="grow"
                placeholder="Your shop password"
                value={formData.shop_password}
                onChange={handleChange}
                required
              />
            </label>

            <div className="card-actions justify-center mt-4">
              <button
                type="submit"
                className="btn btn-primary btn-wide"
                disabled={loading}
              >
                {loading ? "Processing..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";

import axios from "axios";
import { useState } from "react";

const page = () => {
  const [formData, SetFormData] = useState({
    email: "",
    shop_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const { data } = await axios.post("/api/admin-login", formData);
      console.log("Admin", data);
      if (data?.status) {
        console.log("admin", data);
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
  const handleSubmitMerchant = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const { data } = await axios.post("/api/merchant-login", formData);
      console.log("merchant", data);
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
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login here</h2>
          {message && <p className="text-center text-green-500">{message}</p>}

          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              className="grow"
              name="email"
              placeholder="afreed@printmanzil.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label class="input input-bordered flex items-center gap-2">
            Shop password
            <input
              type="password"
              className="grow"
              name="shop_password"
              placeholder="Your shop name"
              value={formData.shop_password}
              onChange={handleChange}
            />
          </label>

          <div className="card-actions justify-between-center">
            <button
              className="btn btn-primary btn-wide"
              onClick={handleSubmitAdmin}
            >
              Admin
            </button>
            <button
              className="btn btn-primary btn-wide"
              onClick={handleSubmitMerchant}
            >
              merchant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

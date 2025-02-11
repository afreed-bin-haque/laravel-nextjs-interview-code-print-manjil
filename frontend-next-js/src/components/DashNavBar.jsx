"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DashNavBar = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handlerootRouting = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get("/api/conf-navigate");
      console.log(data);
      if (data?.success) {
        const path =
          data?.user?.path === "admin"
            ? "/admin/dashboard"
            : "/merchant/dashboard";
        setLoading(false);
        router.refresh();
        router.push(path);
      } else {
        setLoading(false);
      }
    } catch (exception) {
      setLoading(false);
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get("/api/log-out");
      console.log(data);
      if (data?.success) {
        setLoading(false);
        router.refresh();
        router.push("/login");
      } else {
        setLoading(false);
      }
    } catch (exception) {
      setLoading(false);
    }
  };
  return (
    <div className="navbar ">
      <div className="navbar-start" onClick={handlerootRouting}>
        <button>
          <Image
            src="/print-manzil/logo.png"
            width={60}
            height={60}
            alt="Print Manzil"
          />
        </button>
      </div>

      <div className="navbar-end gap-4">
        <div>
          <button className="btn" onClick={handleLogout} disabled={loading}>
            {loading ? "Please Wait" : "Log out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashNavBar;

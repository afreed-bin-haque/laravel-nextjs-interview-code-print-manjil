import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/print-manzil/logo.png"
            width={60}
            height={60}
            alt="Print Manzil"
          />
        </Link>
      </div>

      <div className="navbar-end gap-4">
        <div>
          <Link className="btn" href="/login">
            Login
          </Link>
          <Link className="btn" href="/merchant-register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login here</h2>

          <label class="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              class="grow"
              placeholder="afreed@printmanzil.com"
            />
          </label>

          <label class="input input-bordered flex items-center gap-2">
            Shop password
            <input type="passwor" class="grow" placeholder="Your shop name" />
          </label>

          <div className="card-actions justify-between-center">
            <button className="btn btn-primary btn-wide">Admin</button>
            <button className="btn btn-primary btn-wide">merchant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

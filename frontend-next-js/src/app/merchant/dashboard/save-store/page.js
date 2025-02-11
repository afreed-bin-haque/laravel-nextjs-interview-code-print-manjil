import React from "react";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Save Store</h2>
          {/* {message && <p className="text-center text-green-500">{message}</p>} */}

          <label className="input input-bordered flex items-center gap-2">
            Category
            <input
              type="text"
              className="grow"
              name="category"
              placeholder="Type Store name"
            />
          </label>

          <div className="card-actions justify-between-center">
            <button className="btn btn-primary btn-wide">
              {/* {loading ? "Please Wait..." : "Submit Category"} */} submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

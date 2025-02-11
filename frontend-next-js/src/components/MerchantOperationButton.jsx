import Link from "next/link";
import React from "react";

const MerchantOperationButton = () => {
  return (
    <div className="join">
      <Link className="btn join-item" href="/merchant/dashboard/save-store">
        Save Store
      </Link>
    </div>
  );
};

export default MerchantOperationButton;

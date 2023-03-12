import React from "react";

function Banner({ children, status }) {
  const className = ["banner", status].filter(Boolean).join(" ");

  return <div className={className}>{children}</div>;
}

export default Banner;

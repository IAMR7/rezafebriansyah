import React from "react";

export default function layout({ children }) {
  return (
    <div className="content">
      <div className="min-h-screen px-20 py-3">{children}</div>
    </div>
  );
}

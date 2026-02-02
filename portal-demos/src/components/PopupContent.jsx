import React from "react";

const PopupContent = ({ copied }) => {
  return (
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>Copied!</div>
      )}
    </section>
  );
};

export default PopupContent;

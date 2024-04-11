import React from "react";

export default function PVDA(props) {
  return (
    <div>
      <h2>Trịnh Văn Chung - 2200112202</h2>
      <hr />
      <p>Bài thực hành 1</p>
      <p>Email: {props.email}</p>
      <p>Phone:{props.phone}</p>
    </div>
  );
}

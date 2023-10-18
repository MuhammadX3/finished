import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

export default function Tabbar() {
  const [tabActive, setTabActive] = useState(1);
  console.log(tabActive);

  return (
    <Wrapper className="bg-white">
      <div
        className="d-flex justify-content-center py-4"
        style={{ backgroundColor: "#f8bd00" }}
      >
        <div
          onClick={() => setTabActive(1)}
          style={{ cursor: "pointer" }}
          className={`mx-4 px-5 py-2 fs-5 fw-semibold rounded-1 ${
            tabActive === 1 ? "active" : ""
          }`}
        >
          Local Jobs
        </div>

        <div
          onClick={() => setTabActive(2)}
          style={{ cursor: "pointer" }}
          className={`mx-4 px-5 py-2 fs-5 fw-semibold rounded-1 ${
            tabActive === 2 ? "active" : ""
          }`}
        >
          International Jobs
        </div>

        <div
          onClick={() => setTabActive(3)}
          style={{ cursor: "pointer" }}
          className={`mx-4 px-5 py-2 fs-5 fw-semibold rounded-1 ${
            tabActive === 3 ? "active" : ""
          }`}
        >
          Gig Cars
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .active {
    background-color: #5b5b5b;
    color: #f4f4f4;
  }
`;

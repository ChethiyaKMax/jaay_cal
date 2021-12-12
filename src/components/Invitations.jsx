import React from "react";
import check from "../assets/images/check.png";

const inviteList = [
  {
    key: 1,
    check: true,
    email: "johnsmith@gmail.com",
  },
  {
    key: 2,
    check: true,
    email: "arnoldschwarzenegger@mail.com",
  },
  {
    key: 3,
    check: false,
    email: "lukeskywalker@moseisly.com",
  },
  {
    key: 4,
    check: true,
    email: "anakinskywalker@vader.com",
  },
  {
    key: 5,
    check: false,
    email: "wheresWaldo@gmail.com",
  },
  {
    key: 6,
    check: true,
    email: "johnsmith@gmail.com",
  },
];

export default function Invitations(props) {
  return (
    <div className="scroller">
      <div className="invitations-container">
        {inviteList.map((item) => {
          return (
            <div className="list-item" key={item.key}>
              <div className="checkbox">
                <img
                  src={check}
                  alt=""
                  style={{ display: item.check ? "block" : "none" }}
                />
              </div>
              <span className="email">{item.email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

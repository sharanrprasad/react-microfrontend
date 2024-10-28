import React, { useEffect, useState } from "react";
import { User } from "../types/user.ts";
import { getUser } from "../api/user.service.ts";

const UserWidget: React.FC = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((e) => console.error("Error fetching user: ", e));
  }, []);

  return (
    <div
      style={{
        borderStyle: "dashed",
        borderColor: "var(--user-module-color)",
      }}
    >
      <h2>Your Customers [Customers Remote Module]</h2>
      <p>API base url: {import.meta.env.VITE_CUSTOMER_API_BASE_URL}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}>
        {user?.email}
      </div>
    </div>
  );
};
export default UserWidget;

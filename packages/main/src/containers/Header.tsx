import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchIsProfileComplete } from "../services/profile.service.ts";
import { MfeEvents, UserProfileUpdatedCustomEvent } from "@or/models";

const Header = () => {
  const [isProfileComplete, setIsProfileComplete] = React.useState<
    boolean | null
  >(null);

  useEffect(() => {
    const getIsProfileComplete = async () => {
      const result = await fetchIsProfileComplete();
      setIsProfileComplete(result);
    };
    getIsProfileComplete().catch(err => {
      console.error(err);
    })

    const listener = (e: UserProfileUpdatedCustomEvent) => {
      setIsProfileComplete(e.detail.isComplete);
    };

    window.addEventListener(
      MfeEvents.USER_UPDATED_EVENT,
      listener as EventListener,
    );

    return () => {
      window.removeEventListener(
        MfeEvents.USER_UPDATED_EVENT,
        listener as EventListener,
      );
    };
  }, []);

  return (
    <header
      style={{
        width: "100%",
        height: "250px",
        background: "yellow",
        display: "flex",
        alignItems: "left",
      }}
    >
      <Link
        aria-label={"customer"}
        style={{ marginRight: "20px" }}
        to={"/customer"}
      >
        <span>{"Profile"}</span>
        <span> {isProfileComplete === false ? "(not complete)" : ""} </span>
      </Link>
      <Link style={{ marginRight: "20px" }} to={"/product"}>
        Profile
      </Link>
    </header>
  );
};

export default Header;

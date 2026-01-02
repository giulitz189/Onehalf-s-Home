import { CSSProperties } from "react";

export const hamburgerLines: CSSProperties = {
  cursor: "pointer",
  width: "30px",
  height: "25px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  zIndex: 1000,
};

export const line: CSSProperties = {
  width: "100%",
  height: "5px",
  backgroundColor: "#fff",
  transition: "all 0.3s ease",
};

export const lineTopOpen: CSSProperties = {
  transform: "translateY(2.5px) rotate(45deg) translate(5px, 5px)",
};

export const lineMiddleOpen: CSSProperties = {
  opacity: 0,
};

export const lineBottomOpen: CSSProperties = {
  transform: "translateY(-2.5px) rotate(-45deg) translate(6px, -6px)",
};

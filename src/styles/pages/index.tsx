import { CSSProperties } from "react";

export const mainFrameStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "stretch" as "stretch",
  width: "100%",
};

export const headerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "60px",
  padding: "0 20px 20px 20px",
  background:
    "linear-gradient(180deg, #0f52ba 0%, #0f52ba 75%, transparent 100%)",
};

export const menuStyles: CSSProperties = {
  position: "absolute" as "absolute",
  width: "100%",
  overflowY: "auto" as "auto",
  display: "flex",
  flexDirection: "column" as "column",
  backgroundColor: "rgba(89, 15, 186, 0.5)",
  transition: "height 0.3s ease",
  zIndex: 100,
};

export const contentStyles: CSSProperties = {
  flex: 1,
  height: "100%",
  overflowY: "auto" as "auto",
  padding: "20px",
};

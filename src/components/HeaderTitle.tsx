// scr/components/HeaderTitle.tsx

import { Typography } from "@mui/material";
type HeaderTitleProp = {
  title: string;
  locationPage?: string;
};
function HeaderTitle({ title, locationPage }: HeaderTitleProp) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "250px",
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" style={{ fontWeight: "100" }}>
        {title}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: "100" }}>
        {locationPage}
      </Typography>
    </div>
  );
}

export default HeaderTitle;

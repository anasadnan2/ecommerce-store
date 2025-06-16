import { Button, TextField } from "@mui/material";
import Categories from "./CATEGORIES";
import Tages from "./Tages";
import SearchIcon from "@mui/icons-material/Search";
import LatestPosts from "./LatestPosts";
import SocialLinks from "./SocialLinks";

function ListBlogs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            "& .MuiOutlinedInput-root": {
              borderRadius: "0px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: "56px",
            minWidth: "56px",
            borderRadius: "0px",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          <SearchIcon />
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {/* CATEGORIES */}
        <Categories />
        {/* -----CATEGORIES---- */}
        {/* tages */}
        <Tages />
        <LatestPosts/>
        <SocialLinks/>
      </div>
    </div>
  );
}

export default ListBlogs;

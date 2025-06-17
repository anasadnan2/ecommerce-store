// scr/components/ListSerach.tsx

import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Categories from "./Category";
import Tages from "./Tages";
import Brands from "./Brands";

function ListSerach() {
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
      {/* Filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {/* CATEGORIES */}
        <Categories />
        {/* -----CATEGORIES---- */}
        {/* tages */}
        <Tages />
        {/* --------tages----------- */}
        {/* brands */}
        <Brands />
        {/* --------brands -------*/}
      </div>
      {/* --------Filters -------*/}
    </div>
  );
}

export default ListSerach;

import { Button, TextField, Typography } from "@mui/material";

function AnyQuestions() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "50%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "700" }}>
          ANY QUESTIONS ?
        </div>
        <div>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "100",
              color: "text.secondary",
            }}
          >
            Ues the form below to get in touch with us .
          </Typography>
        </div>
      </div>
      {/* textfiled */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            placeholder="Enter Your Full Name"
            style={{ width: "50%" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email "
            style={{ width: "50%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number "
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Subject Title"
            variant="outlined"
            placeholder="Write Your Subject Title"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Massage"
            variant="outlined"
            placeholder="Write Your Massage "
            style={{ width: "100%" }}
          />
        </div>
      </div>
      {/* textfiled */}
      <div>
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            width: "100px",
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

export default AnyQuestions;

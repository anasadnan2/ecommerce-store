import { Typography } from "@mui/material";

function ContactInfo() {
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
        <div style={{ fontSize: "20px", fontWeight: "700" }}>CONTACT INFO</div>
        <div>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "100",
              color: "text.secondary",
            }}
          >
            Tortor dugnissim convallis aenean et tortor at risus viverra
          </Typography>
        </div>
      </div>
      {/* contact info */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {/* OFFICE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            OFFICE
          </div>
          <div style={{ fontSize: "14px", fontWeight: "200" }}>
            1234 Street Name, City, State, 12345
          </div>
          <div style={{ fontSize: "14px", fontWeight: "400" }}>
            +123 222 333 4444
          </div>
          <div style={{ fontSize: "14px", fontWeight: "300" }}>
            +123 222 333 4444
          </div>
          <div style={{ fontSize: "14px", fontWeight: "300" }}>
            anasadnanabojaber@gmail.com
          </div>
        </div>
        {/*----- OFFICE---- */}
        {/* MANAGEMENT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            MANAGEMENT
          </div>
          <div style={{ fontSize: "14px", fontWeight: "200" }}>
            1234 Street Name, City, State, 12345
          </div>
          <div style={{ fontSize: "14px", fontWeight: "400" }}>
            +123 222 333 4444
          </div>
          <div style={{ fontSize: "14px", fontWeight: "300" }}>
            +123 222 333 4444
          </div>
          <div style={{ fontSize: "14px", fontWeight: "300" }}>
            anasadnanabojaber@gmail.com
          </div>
        </div>
        {/* ------ MANAGEMENT ------ */}
      </div>
    </div>
  );
}

export default ContactInfo;

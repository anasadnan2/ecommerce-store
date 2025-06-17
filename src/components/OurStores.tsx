import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import photo10 from "../assets/photo10.jpg";

function OurStores() {
  return (
    <div
      style={{
        width: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        padding: "20px 0",
        marginTop: "50px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          height: "500px",
        }}
      >
        <CardMedia sx={{ width: 500 }} image={photo10} title="green iguana" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingLeft: "20px",
            }}
          >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                OUR STORES
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You can also directly buy our products from our stores.
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                >
                  USA
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                >
                  FRANCE
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
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default OurStores;

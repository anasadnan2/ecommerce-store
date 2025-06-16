import { Card, Typography } from "@mui/material";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.webp";
import photo5 from "../assets/photo5.webp";
import photo6 from "../assets/photo6.png";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpeg";
import photo9 from "../assets/photo9.jpg";

function BlogNews() {
  const blogs = [
    {
      image: photo1,
      date: "Feb 1, 2023",
      category: "Gadgets",
      title: "GET SOME COOL GADGETS IN 2023",
    },
    {
      image: photo2,
      date: "Feb 2, 2023",
      category: "Technology",
      title: "TECHNOLOGY HACK YOU WON’T GET",
    },
    {
      image: photo3,
      date: "Feb 3, 2023",
      category: "Camera",
      title: "TOP 10 SMALL CAMERA IN THE WORLD",
    },
    {
      image: photo4,
      date: "Feb 4, 2023",
      category: "Gadgets",
      title: "GET SOME COOL GADGETS IN 2023",
    },
    {
      image: photo5,
      date: "Feb 5, 2023",
      category: "Technology",
      title: "TECHNOLOGY HACK YOU WON’T GET",
    },
    {
      image: photo6,
      date: "Feb 6, 2023",
      category: "Camera",
      title: "TOP 10 SMALL CAMERA IN THE WORLD",
    },
    {
      image: photo7,
      date: "Feb 7, 2023",
      category: "Gadgets",
      title: "GET SOME COOL GADGETS IN 2023",
    },
    {
      image: photo8,
      date: "Feb 8, 2023",
      category: "Technology",
      title: "TECHNOLOGY HACK YOU WON’T GET",
    },
    {
      image: photo9,
      date: "Feb 9, 2023",
      category: "Camera",
      title: "TOP 10 SMALL CAMERA IN THE WORLD",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {blogs.map((item, index) => (
        <div key={index} style={{ cursor: "pointer" }}>
          <Card
            sx={{
              width: 200,
              margin: 2,
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img height="200" src={item.image} alt={item.title} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <Typography
                style={{ padding: "10px", fontSize: "10px", fontWeight: "100" }}
              >
                {item.date}
              </Typography>
              <Typography style={{ padding: "10px" }}>{item.title}</Typography>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default BlogNews;

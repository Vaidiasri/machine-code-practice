import { useState } from "react";

function ImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      {/* Top Images */}
      <div style={{ display: "flex", gap: "20px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Cat ${index + 1}`}
            width="200"
            height="150"
            style={{ cursor: "pointer", objectFit: "cover" }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Selected Image */}
      <h2>Selected Image</h2>

      <img
        src={selectedImage}
        alt="Selected"
        width="600"
        style={{ objectFit: "cover" }}
      />
    </>
  );
}

export default ImageGallery;
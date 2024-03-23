import { ICard } from "./cardInterface";
import React, { useState } from "react"; // Import React and useState
import { Icon } from "@fluentui/react/lib/Icon";
import { Stack } from "@fluentui/react";

export const Card = (cardData: ICard) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const [icClicked, setIsClicked] = useState(cardData.data.isFavorite);

  return (
    <div style={{ padding: 10 }} key={cardData.data.id}>
      <div
        className="card"
        style={{
          width: "18rem",
          height: "14rem",
          background: "rgba(255, 255, 255, 0.16)",
          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.4px)",
          WebkitBackdropFilter: "blur(5.4px)",
          border: "1px solid rgba(255, 255, 255, 0.17)",
        }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ color: "whitesmoke" }}>
            {cardData.data.name}
          </h5>
          <p
            className="card-text"
            style={{
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: 54,
              marginTop: 10,
              color: "whitesmoke",
            }}
          >
            {cardData.data.description}
          </p>
          <p className="card-text">
            <small className="text-muted">
              Created by: {cardData.data.user}
            </small>
          </p>
          <Stack horizontal tokens={{ childrenGap: 100 }}>
            <a
              href={cardData.data.goto}
              className="btn btn-primary"
              style={{
                display: "inline-block",
                padding: "10px 10px",
                textDecoration: "none",
                borderRadius: "15px",
                backgroundColor: isHovered
                  ? "rgba(255,255,255,0.3)"
                  : "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(30px)",
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
                letterSpacing: "2px",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "background-color 0.3s ease", // Adding transition for smooth effect
              }}
              onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
              onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            >
              Let's Cook
            </a>
            <Icon
              iconName={icClicked ? "FavoriteStarFill" : "FavoriteStar"}
              style={{
                fontSize: 28,
                color: icClicked ? "#ffc107" : "rgba(255,255,255,0.8)",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsClicked(!icClicked);
                cardData.favorites(cardData.data)
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import Image from "next/image";
import styles from "./BasicCard.module.scss";

interface BasicCardProps {
  key?: number;
  image: string;
  title: string;
  description: string;
}

export const BasicCard: React.FC<BasicCardProps> = ({ image, title, description }) => {
  const isLongDescription = description.length > 200; // Adjust threshold as needed

  return (
    <Card className={styles.cardContainer}>
      {/* Image Section */}
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Content Section */}
      <CardContent className={styles.cardContent}>
        <Typography variant="h6" className={styles.cardTitle}>
          {title}
        </Typography>

        {isLongDescription ? (
          <Tooltip title={description} arrow>
            <Typography variant="body2" className={`${styles.cardDescription} cursor-pointer`}>
              {description.slice(0, 200)}...
            </Typography>
          </Tooltip>
        ) : (
          <Typography variant="body2" className={styles.cardDescription}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import styles from "./TestimonialCard.module.scss";

interface TestimonialCardProps {
  image: string;
  profession: string;
  description: string;
  name: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  profession,
  description,
  name,
}) => {
  return (
    <Card className={styles.testimonialCard}>
      <CardContent className={styles.cardContent}>
        {/* Top section: Avatar, Profession, and Description */}
        <div className={styles.topContent}>
          <div className={styles.header}>
            <Avatar src={image} alt={name} className={styles.avatar} />
            <Typography variant="body2" className={styles.profession}>
              {profession}
            </Typography>
          </div>

          <Typography variant="body1" className={styles.description}>
            {description}
          </Typography>
        </div>

        {/* Bottom section: Name aligned to bottom */}
        <div className={styles.bottomContent}>
          <Typography variant="h6" className={styles.name}>
            {name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

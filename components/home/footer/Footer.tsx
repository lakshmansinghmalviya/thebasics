import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import { Facebook, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container className={styles.footerContainer}>
        {/* Top Text */}
        <Typography variant="body2" className={styles.footerText}>
          Designed and built with all the love in the world by the TheBasics team with the help of our developers.
        </Typography>
        <Typography variant="body2" className={styles.footerText}>
          <strong>The Basics Digital Solutions Private Limited</strong> <br />
          93, REVENUE NAGAR, NEAR HERO HONDA SHOWROOM, <br />
          INDORE, Madhya Pradesh, 452009
        </Typography>

        {/* Links Section */}
        <Box className={styles.footerLinks}>
          {/* Company Sites */}
          <Box className={styles.footerColumn}>
            <Typography variant="h6" className={styles.footerTitle}>Company Sites</Typography>
            <ul className={styles.footerList}>
              {["Msgclub", "SmsCluster", "Sms7.biz", "Hostingg.in", "Msgondnd", "izedwebhosting"].map((site) => (
                <li key={site}>
                  <Link href="#" className={styles.footerItem}>{site}</Link>
                </li>
              ))}
            </ul>
          </Box>

          {/* Services */}
          <Box className={styles.footerColumn}>
            <Typography variant="h6" className={styles.footerTitle}>Services</Typography>
            <ul className={styles.footerList}>
              {["Text Sms", "Voice Sms", "International Sms", "Windows Hosting", "Linux Hosting", "Dedicated Server", "VPS Server"].map((service) => (
                <li key={service}>
                  <Link href="#" className={styles.footerItem}>{service}</Link>
                </li>
              ))}
            </ul>
          </Box>

          {/* About Us */}
          <Box className={styles.footerColumn}>
            <Typography variant="h6" className={styles.footerTitle}>About Us</Typography>
            <ul className={styles.footerList}>
              {["Home", "About Us", "Career", "Site Map", "Industry Solution", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className={styles.footerItem}>{item}</Link>
                </li>
              ))}
            </ul>
          </Box>

          {/* Product */}
          <Box className={styles.footerColumn}>
            <Typography variant="h6" className={styles.footerTitle}>Product</Typography>
            <ul className={styles.footerList}>
              {["Business Check-in", "Predictive Dialer", "Bulk Sms App", "Tag By Location", "Call Management", "Politician App"].map((product) => (
                <li key={product}>
                  <Link href="#" className={styles.footerItem}>{product}</Link>
                </li>
              ))}
            </ul>
          </Box>

          {/* Development */}
          <Box className={styles.footerColumn}>
            <Typography variant="h6" className={styles.footerTitle}>Development</Typography>
            <ul className={styles.footerList}>
              {["Web Development", "Web Designing", "Mobile Development", "Online Branding"].map((dev) => (
                <li key={dev}>
                  <Link href="#" className={styles.footerItem}>{dev}</Link>
                </li>
              ))}
            </ul>
          </Box>
        </Box>

        {/* Social Icons */}
        <Box className={styles.footerSocial}>
          {[Facebook, Twitter, GitHub, LinkedIn].map((Icon, index) => (
            <Link key={index} href="#" className={styles.footerIcon}>
              <Icon fontSize="large" />
            </Link>
          ))}
        </Box>

        {/* Copyright */}
        <Typography variant="body2" className={styles.footerText} sx={{ textAlign: "center", mt: 4 }}>
          © {new Date().getFullYear()} The Basics Digital Solutions Pvt. Ltd. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

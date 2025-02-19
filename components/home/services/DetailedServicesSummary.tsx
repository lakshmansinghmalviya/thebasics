import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styles from "./DetailedServicesSummary.module.scss";
import { SimpleHeading } from "@/components/shared/headings/simple-heading/SimpleHeading";

const services = [
    "Website Design and Development",
    "Application Development",
    "Search Engine Marketing Services",
    "E-commerce Solutions",
    "Rich Internet Applications",
    "Web Hosting (Windows & Linux)",
    "Domain Registration",
    "VoIP Solutions",
    "Bulk SMS Solutions (International & Local)",
    "SEO Services",
    "Email Marketing & E-Marketing",
    "Software Development",
    "IT Security Solutions",
    "Business Consulting",
    "Technology Infrastructure",
    "Brand Consulting",
    "24/7 Customer Support",
];

export const DetailedServicesSummary: React.FC = () => {
    return (
        <>
            <SimpleHeading text="Detailed Overview of Our Services 🚀" />
            <div className={styles.container}>
                <Card className={styles.serviceCard}>
                    <CardContent>
                        <Typography variant="body1" className={styles.description}>
                            <span className={styles.highlight}>TheBasics</span> is a leading web development
                            and software company that provides a full spectrum of IT solutions. Our services
                            help businesses achieve competitive advantages by leveraging innovation, expertise,
                            and cutting-edge technology. Whether you need web development, IT security, SEO,
                            or hosting solutions, we’ve got you covered!
                        </Typography>

                        <Typography variant="h5" className={styles.subtitle}>
                            Why Choose theBasics?
                        </Typography>

                        <Typography variant="body1" className={styles.description}>
                            We prioritize long-term relationships, offering **24/7 support**,
                            **cost-effective solutions**, **high-quality service**, and **industry expertise**.
                            Our skilled team ensures seamless execution of your business goals.
                        </Typography>

                        <Typography variant="h5" className={styles.subtitle}>
                            Key Benefits
                        </Typography>
                        <ul className={styles.benefitsList}>
                            <li>✔️ Maximized return on investment</li>
                            <li>✔️ Full transparency in project progress</li>
                            <li>✔️ Integrated 24/7 customer support</li>
                            <li>✔️ Expert business and technology consulting</li>
                            <li>✔️ Comprehensive IT and digital solutions</li>
                        </ul>

                        <Typography variant="h5" className={styles.subtitle}>
                            Our Services 25+
                        </Typography>
                        <Grid container spacing={2} className={styles.servicesGrid}>
                            {services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card className={styles.serviceItem}>
                                        <CardContent>
                                            <Typography variant="body1" className={styles.serviceText}>
                                                {service}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>

    );
};

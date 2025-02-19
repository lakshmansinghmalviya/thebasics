import React, { useState } from "react";
import { Header } from "./header/Header";
import { Services } from "./services/Services";
import { Products } from "./products/Products";
import { Development } from "./development/Development";
import { Payment } from "./payment/Payment";
import { Contact } from "./contact/Contact";
import { BasicCard } from "../shared/normal-card/BasicCard";
import { SimpleHeading } from "../shared/headings/simple-heading/SimpleHeading";
import { Footer } from "./footer/Footer";

export const Home = () => {
    const [selectedNav, setSelectedNav] = useState<string>("Services"); // Default component

    // Function to handle navigation item clicks
    const handleNavItemClick = (item: string) => {
        setSelectedNav(item);
    };

    // Function that returns the selected component
    const getComponent = () => {
        switch (selectedNav) {
            case "Services":
                return <Services />;
            case "Products":
                return <Products />;
            case "Development":
                return <Development />;
            case "Payment":
                return <Payment />;
            case "Contact":
                return <Contact />;
            default:
                return <Services />; // Default component
        }
    };

    return (
        <>
            <Header onNavItemClick={handleNavItemClick} />
            <div>{getComponent()}</div>
            <Footer />
        </>
    );
};

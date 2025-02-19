import React, { useState } from "react";
import { Header } from "./header/Header";
import { Services } from "./services/Services";

export const Home = () => {
    const [selectedNav, setSelectedNav] = useState("");

    // Function to handle navigation item clicks
    const handleNavItemClick = (item: string) => {
        setSelectedNav(item);
    };

    return (
        <>
            <Header onNavItemClick={handleNavItemClick} />
            <div className="z-50">
                <Services />
            </div>
            <div>Selected Nav Item: {selectedNav || "None"}</div>
            <div>Component (like services, products, and more)</div>
            <div>Footer</div>
        </>
    );
};

import React from "react";
import { Layout } from "src/components/organisms/layout";
import { AboutContainer } from "./styled";

export const About = () => {
    return (
        <Layout>
            <AboutContainer>
                <h1>About This App!</h1>
                <h3>Simple pokedex app</h3>
                <h4>This app was built with:</h4>
                <ul>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Atomic Design</li>
                    <li>Style-components</li>
                    <li>React-router-dom</li>
                </ul>
            </AboutContainer>
        </Layout>
    );
};

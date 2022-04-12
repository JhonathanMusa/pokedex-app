import React from "react";
import { Layout } from "src/components/organisms/layout";
import {
    AboutContainer,
    AboutList,
    AboutParagraph,
    AboutSubtitle,
    AboutTitle,
} from "./styled";

export const About = (): JSX.Element => {
    return (
        <Layout>
            <AboutContainer>
                <AboutTitle>About This App!</AboutTitle>
                <AboutParagraph>Simple pokedex app</AboutParagraph>
                <AboutSubtitle>This app was built with:</AboutSubtitle>

                <AboutList>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Atomic Design</li>
                    <li>Style-components</li>
                    <li>React-router-dom</li>
                </AboutList>
            </AboutContainer>
        </Layout>
    );
};

import React, { ReactNode } from "react";
import { Header } from "../header";
import { MainContainer, WrapperLayout } from "./styled";

type LayoutProps = {
    children: ReactNode;
};

export const Layout = (props: LayoutProps): JSX.Element => {
    const { children } = props;
    return (
        <WrapperLayout>
            <Header />
            <MainContainer>{children}</MainContainer>
        </WrapperLayout>
    );
};

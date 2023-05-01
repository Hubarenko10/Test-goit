import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Container, Header, Navigate } from "./SharedLayoutStyled";

export const SharedLayout = () => {
return(
    <Container>
    <Header>
        <nav>
            <Navigate to="/" end>
                Home
            </Navigate>
            <Navigate to="/tweets">
                Tweets
            </Navigate>
        </nav>
    </Header>
    <Suspense fallback={null}>
        <Outlet/>
    </Suspense>
    </Container>
    
    )

}

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../container/container';
import Header from '../header/header';
import { NavWrap, DirectLink } from 'pages/home/home.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Container>
          <NavWrap>
            <DirectLink to="/">Home</DirectLink>
            <DirectLink to="/movies">Movies</DirectLink>
          </NavWrap>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

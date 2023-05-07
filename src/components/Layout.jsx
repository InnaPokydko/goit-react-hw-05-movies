import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MainContainer, Header, Link, Footer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search/search-movies">Movies</Link>
          </li>
        </ul>
      </Header>
            <main>
            <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </main>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Layout;

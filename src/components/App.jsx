import { NavLink, Route, Routes } from 'react-router-dom';
import { HomeContainer, NavLinkList, NavLinkItem } from './App.styled';
import Home from '../pages/homePage/HomePage';
import MoviesSearch from 'pages/moviesSearch/MoviesSearch';


export const App = () => {
  return (
    <>
      <HomeContainer>
      <NavLinkList>
        <NavLinkItem>
          <NavLink to="/">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavLinkItem>
      </NavLinkList>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<MoviesSearch/>} />
      </Routes>
    </HomeContainer>
    </>
    
  );
};

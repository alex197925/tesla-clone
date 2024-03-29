/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgurStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href='#'>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgurStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CoctumClose onClick={() => setBurgurStatus(false)} />
        </CloseWrapper>

        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href='#'>{car}</a>
            </li>
          ))}

        <li>
          <a href='#'>Existing Invetory</a>
        </li>
        <li>
          <a href='#'>Used Invetory</a>
        </li>
        <li>
          <a href='#'>Traed-in</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  display: flex;
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  text-align: start;
  flex-direction: column;
  transition: transform 0.2s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 500;
    }
  }
`;

const CoctumClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

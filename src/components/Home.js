/** @format */

import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImage='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImage='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImage='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImage='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Low Coast Solar Panels in America'
        description='Monay-back guarantee'
        backgroundImage='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Then a New Roofs'
        backgroundImage='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />

      <Section
        title='Accessories'
        description=''
        backgroundImage='accessories.jpg'
        leftBtnText='Shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

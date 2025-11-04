import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

const Container = styled.div`
  text-align: center;
  padding: 40px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.textLight};
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <h1>🌸 CycleSense</h1>
        <Card>
          <h2>AI-powered Menstrual & Nutrition Assistant</h2>
          <p>Track your cycle, manage your diet, and stay balanced with AI insights.</p>
          <button>Get Started</button>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;

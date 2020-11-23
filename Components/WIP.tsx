import styled from "styled-components";

const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WIP = () => {
  return (
    <Container>
      <h1>This web is under construction</h1>
      <p>
        In the meantime you can checkout my{" "}
        <a href="https://v1.web.kaifer.cz">old web</a>.
      </p>
    </Container>
  );
};

export default WIP;

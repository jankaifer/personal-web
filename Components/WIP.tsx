import styled from "styled-components";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WIP = () => {
  return (
    <Section>
      <h1>This web is under construction</h1>
      <p>
        In the meantime you can checkout my{" "}
        <a href="web-v1.kaifer.cz">old web</a>.
      </p>
    </Section>
  );
};

export default WIP;

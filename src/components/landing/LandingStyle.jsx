import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContentsContainer = styled.div`
  text-align: center;
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  background: white;
`;

export const ImageContainer = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-evenly;
  img {
    width: 3250px;
    height: 250px;
  }
`;

export const Contents = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: orange;
  display: table;
  margin: auto;
`;

export const Paragraph = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  div {
    padding: 3px;
  }
`;

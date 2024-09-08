import styled from "styled-components";

export const StyledBanner = styled.div`
  background-size: cover;
  background-image: ${({ $backdropPath }) =>`url(https://image.tmdb.org/t/p/original${$backdropPath})`}; //destructuring
 
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  height: 80vh;
  margin-bottom: -80px;
  margin-top: -10vh;
  object-fit: contain;
`;

import styled from "styled-components";

type PosterType = {
  bgImg: String;
};

export const Poster = styled.div<PosterType>`
  width: 100%;
  height: calc(var(--card-width)*0.7);
  border-radius: var(--card-border) var(--card-border) 0 0;
  background-size: cover;
  background-image: ${ props => `url(${props.bgImg})` };
  background-color: #a77bfd50;
  background-blend-mode: screen;
  transition: background-color 0.5s;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white); 
  box-shadow: rgb(0 0 0 / 24%) 0px 8px 12px;
  cursor: pointer;

  width: var(--card-width);
  max-width: 95vw;
  border-radius: var(--card-border);
  box-shadow: 5px black;

  transition: all ease 0.2s;
  transform: scale(0.95);

  &:hover {
    background-color: var(--primary-color);
    transform: scale(1);
  }
  &:hover ${Poster} {
    background-color: transparent;
  }
`;

export const Title = styled.div`
  background-repeat: no-repeat;
  background-size: 100% 95%;
  padding: 8px 0;

padding: 1em;
h3 {
  font-size: 1.4rem;
 }
 span{
   font-size: 0.75rem;
   color: var(--gray);
 }
`;

export const Info = styled.div`
  padding: 1em 1em 0 1em;
  padding-top: 0;
  line-height: 1.5rem;
`;

export const PlaySession = styled.div`
  margin-top: 1em;
`;

export const Actions = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: right;
`;


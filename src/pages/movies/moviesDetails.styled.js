import styled from '@emotion/styled';

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px;
`;
export const TextContainer = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
export const AddIndorm = styled.div`
  padding: 50px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastItem = styled.li`
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CastName = styled.div`
  width: 120px;
`;
export const ReviewsList = styled.div`
  padding: 50px;
`;
export const GoBckkBtn = styled.button`
  width: 115px;
  height: 40px;
  border-radius: 25px;
  color: #6b18e1;
  background-color: #e6df16ab;
  margin-top: 25px;
  margin-bottom: 35px;
  margin-left: 35px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: all 500ms ease-out;
  &:hover {
    transform: scale(1.08);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;

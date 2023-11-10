import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 100vh;
  flex-direction: column;
  gap: 20px;

  button {
    padding: 10px 20px;
    border-radius: 10px;
    width: 200px;
    cursor: pointer;
    border: none;
    color: white;
    background-color: #40a9ff;
    align-self: flex-end;
    margin-top: 70px;
    margin-right: 30px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;
export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;
export const WareHouseDataWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 10px;
  height: auto;
  flex-wrap: wrap;
`;

export const SearchBar = styled.div`
  width: 180px;
  display: flex;
  border-radius: 5px;
  /* margin-top: 100px; */
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  height: 30px;
  input {
    width: 150px;
    padding-left: 10px;
    font-size: 15px;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

export const NoData = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100%;
  width: 70px;
  background-color: #5bc0de;
  cursor: pointer;
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 350px;
  background-color: gainsboro;
  border-radius: 5px;
  height: 350px;
  gap: 10px;
  cursor: pointer;
  padding: 20px 30px;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), 0 5px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const Name = styled.div`
  display: flex;
  padding-top: 10px;
  width: 100%;
  align-items: center;
  text-align: center;
  max-width: fit-content;
  font-size: 20px;
  font-weight: 700;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: fit-content;
  text-align: center;
  justify-content: center;
  font-size: 15px;
  gap: 20px;
  padding-top: 10px;
  span {
    text-transform: capitalize;
  }
`;

export const Title = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: 20px;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
`;

export const FilterWraper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 50px;
  .css-1fdsijx-ValueContainer {
    min-width: 100px;
  }
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #5bc0de;
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  .selectClass {
    min-width: 150px;
    width: auto;
  }
  .salary_class {
    min-width: 100px;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  /* padding: 10px; */
  .even-row {
    background-color: #f0f0f0; /* Even row color */
  }

  .odd-row {
    background-color: #ffffff; /* Odd row color */
  }
  /* border: 2px solid #08c; */
`;
export const EditWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterWrapper = styled.div;

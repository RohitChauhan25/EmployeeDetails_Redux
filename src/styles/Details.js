import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const BackButton = styled.div`
  width: 100px;
  margin-top: 40px;
  margin-right: 50px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  background-color: gray;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: center;
  font-weight: 800;
  font-size: 30px;
`;
export const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-left: 20px;
`;

export const ImageWrapper = styled.div`
  width: 600px;
  height: 400px;
`;

export const Detail = styled.div`
  width: 100%;
  padding-left: 50px;
  max-width: 600px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 20px;
`;

export const TitleDetails = styled.div`
  width: 200px;
  padding-left: 20px;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 250px;
  margin-left: 20px;
  padding-right: 5px;
  border: 1px solid black;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 30px;
  border-radius: 5px;
  input {
    width: 200px;
    font-size: 20px;
    outline: none;
    border: none;
    background-color: transparent;
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Check = styled.div`
  width: 20px;
  height: 80%;
  border: 1px solid green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const Live = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 2px;
  padding: 5px 10px;
  background-color: #34c240;
  font-size: 10px;
  width: 50px;
  color: white;
  margin-right: 10px;
  margin-left: 10px;
`;
export const Inactive = styled.div`
  border-radius: 5px;
  margin-left: 20px;
  background-color: red;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 30px;
  align-items: center;
  font-size: 10px;
  width: 80px;
  color: white;
  margin-right: 20px;
`;

export const SelectWrapper = styled.div`
  padding-left: 20px;
`;

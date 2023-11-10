import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  button {
    height: 30px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    background-color: #40a9ff;
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;
export const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  width: 90%;
  outline: none;
  padding-left: 10px;
  border: 1px solid #d9d9d9;
  &:hover {
    border-color: #40a9ff !important;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Error = styled.div`
  padding: 0;
  font-size: 10px;
  color: red;
  height: 12px;
`;
export const Wrapper = styled.div`
  width: 100%;
  .antSelect {
    width: 95%;
  }
`;

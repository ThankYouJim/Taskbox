import styled from "styled-components";

export const FlexContainer = styled.label`
  display: flex;
  align-items: center;
  padding: 0.75rem;

  span {
    padding: 0.5rem;
  }

  input[type="text"] {
    color: red;
    flex: 1;
    padding: .5rem;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

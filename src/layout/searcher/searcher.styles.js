import styled from 'styled-components';

const Form = styled.form`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & input[type="text"] {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: unset;
    justify-content: space-between;

    & input[type='text'] {
      width: 300px;
    }
  }
`;

export default Form;

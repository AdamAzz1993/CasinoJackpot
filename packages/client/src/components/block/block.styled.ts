import styled from 'styled-components';

export const BlockWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    outline: 1px solid black;
    width: 5rem;
    height: 5rem;

    .spinner {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 5px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top: 5px solid #3498db; /* Color of the spinner */
      animation: spin 1s linear infinite;
      margin: auto; /* Center the spinner if needed */
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;

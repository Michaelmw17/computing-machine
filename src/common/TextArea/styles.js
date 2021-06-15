import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  resize: none;
  font-size: 0.875rem;
  height: 135px;
  transition: border-color 0.3s ease-in;

  &:focus,
  &:hover {
    border-color: RGB(209, 29, 50);
  }
`;

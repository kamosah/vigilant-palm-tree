import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PrimoUiProps {}

const StyledPrimoUi = styled.div`
  color: pink;
`;

export function PrimoUi(props: PrimoUiProps) {
  return (
    <StyledPrimoUi>
      <h1>Welcome to PrimoUi!</h1>
    </StyledPrimoUi>
  );
}

export default PrimoUi;

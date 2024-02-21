import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Container } from '../reusable/Layouts';

function AppLayout({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

export default AppLayout;

const Wrapper = styled(Container)``;

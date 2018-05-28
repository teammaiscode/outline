// @flow
import * as React from 'react';
import styled from 'styled-components';
import { signin } from '../../../shared/utils/routeHelpers';
import Flex from '../../../shared/components/Flex';
import SlackLogo from '../../../shared/components/SlackLogo';
import { color } from '../../../shared/styles/constants';

type Props = {
  lastLoggedIn: string,
};

const SlackSignin = ({ lastLoggedIn }: Props) => {
  return (
    <Flex justify="center">
      <Flex>
        <Button href={signin('slack')}>
          <SlackLogo />
          <Spacer>Sign In with Slack</Spacer>
        </Button>
        {lastLoggedIn === 'slack' && 'You signed in with Slack previously'}
      </Flex>
      &nbsp;
      <Flex>
        <Button href={signin('google')}>
          <Spacer>Sign In with Google</Spacer>
        </Button>
        {lastLoggedIn === 'google' && 'You signed in with Google previously'}
      </Flex>
    </Flex>
  );
};

const Spacer = styled.span`
  padding-left: 10px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  color: ${color.white};
  background: ${color.black};
  border-radius: 4px;
  font-weight: 600;
`;

export default SlackSignin;

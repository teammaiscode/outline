// @flow
import { ExpandedIcon } from "outline-icons";
import * as React from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import TeamLogo from "components/TeamLogo";

type Props = {
  teamName: string,
  subheading: React.Node,
  showDisclosure?: boolean,
  logoUrl: string,
};

function HeaderBlock({
  showDisclosure,
  teamName,
  subheading,
  logoUrl,
  ...rest
}: Props) {
  return (
    <Header justify="flex-start" align="center" {...rest}>
      <TeamLogo alt={`${teamName} logo`} src={logoUrl} />
      <Flex align="flex-start" column>
        <TeamName showDisclosure>
          {teamName}{" "}
          {showDisclosure && <StyledExpandedIcon color="currentColor" />}
        </TeamName>
        <Subheading>{subheading}</Subheading>
      </Flex>
    </Header>
  );
}

const StyledExpandedIcon = styled(ExpandedIcon)`
  position: absolute;
  right: 0;
  top: 0;
`;

const Subheading = styled.div`
  padding-left: 15px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) => props.theme.sidebarText};
`;

const TeamName = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: 16px;
`;

const Header = styled(Flex)`
  flex-shrink: 0;
  padding: 16px 12px;
  position: relative;
  cursor: pointer;
  width: 100%;
  margin-top: -25px;
  &:active,
  &:hover {
    transition: background 100ms ease-in-out;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export default HeaderBlock;

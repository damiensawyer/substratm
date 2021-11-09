import Address from '../../components/Address/Address';
import MetamaskLogin from '../../components/MetamaskLogin/MetamaskLogin';
import logo from '../../content/loginHelp.png'
import styled from 'styled-components';
const UnAuthenticatedView = () => (
  <>
    <h3>Login To View This Page</h3>
    <MetamaskLogin />

    <p>If you have multiple wallets connected to Metamask, click the connected button and set to active the one you wish to use before connecting Substratm. </p>
    <StyledLogo src={logo} alt="login helper" />
    
  </>
);

const StyledLogo = styled.img`
  height: 40vmin;
  padding:20px;
  pointer-events: none;
`;

export default UnAuthenticatedView;

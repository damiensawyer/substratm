import MetamaskLogin from '../../components/MetamaskLogin/MetamaskLogin';
import styled from 'styled-components';
const UnAuthenticatedView = () => (
  <>
  <header className="App-header">
    <h3>Please Login To View This Page</h3>
    <MetamaskLogin />
    </header>
    </>
  
);

const StyledLogo = styled.img`
  height: 40vmin;
  padding:20px;
  pointer-events: none;
`;

export default UnAuthenticatedView;

import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import Blockie from "components/Blockie";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import NonAuthenticatedView from './pages/NonAuthenticatedView';
import {Header as StyledHeader} from 'components/Header';


const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: '#041836',
    marginTop: '100px',
  },
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    borderBottom: '2px solid rgba(0, 0, 0, 0.06)',
  },
  headerRight: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: '600',
  },
};

const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Router>
      <Layout style={{ height: "100vh", background: "#f0f2f500" }}>
      <div style={styles.content}>
        <StyledHeader/>
        
        
          <Switch>
            <Route path="/quickstart">
              <QuickStart />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <InchDex chain="eth" />
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <NonAuthenticatedView />
            </Route>
            {/* <Redirect from="/" to="/wallet" /> */}
          </Switch>
          <Redirect to="/quickstart" />
           {isAuthenticated ? <Redirect to="/quickstart" /> : <Redirect to="/nonauthenticated" />}
        </div>
      </Layout>
    </Router>
  );
};

export default App;

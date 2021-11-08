import Address from "../../components/Address/Address";
import MetamaskLogin from "../../components/MetamaskLogin/MetamaskLogin";

const UnAuthenticatedView = () => (
    <div className="App">
        <header className="App-header">
            <h1>Login To View This Page</h1>
            <MetamaskLogin/>
        </header>
    </div>
);

export default UnAuthenticatedView;

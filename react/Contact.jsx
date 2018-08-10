function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function welcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">Welcome</h1>
            <p className="Dialog-message">
                thanks for visiting
            </p>
        </FancyBorder>
    );
}
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="Split-left">
                {props.left}
            </div>
            <div className="split_right">
                {props.right}
            </div>
        </div>
    );
}
function App() {
    return (
        <SplitPane left={<concats />} right={<Chat />} />
    );
}
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = { login: "" }
    }
    render() {
        <Dialog title='M E P' message='lorem'>
            <input type="text" value={this.state.login} onChange={this.handleChange} />
            <button onClick={this.handleSignup}>Sign up</button>
        </Dialog>
    }
    handleChange(e) {
        this.setState({
            login: e.target.value
        });
    }
    handleSignup() {
        alert(`Welcome aborad,${this.state.login}`)
    }
}
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <React.Fragment>
                <TextField id="standard-basic" label="Name" onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input} />
                <Button variant="contained" color="primary" onClick={this.handleAddTodo}>
                    Add Account
                </Button>
            </React.Fragment>
        );
    }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;

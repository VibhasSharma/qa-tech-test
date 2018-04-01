import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import DialogBox from './DialogBox';

const paperStyle = {
  padding: 20,
  height: 400,
  flex: 1, 
  flexDirection: 'row',
  alignItems:'center',
  textAlign: 'center',
};
export default class AnswerTable extends Component {
  constructor(props) {
    super()
    this.handleClose = this.handleClose.bind(this)
  }
  
  state = {
    open: false,
    complete: false
  }

  handleClose = () => {
    this.setState({open: false});
  };


 submitForm = () => {
  console.log('------------------------------------');
  console.log(this.state);
  console.log('------------------------------------');
  this.setState({open: true});

  // submit to endpoint then ((response))
  const response = 200;
  if (response === 200) {
    this.setState({complete: true});
  }
}
  handleText = (event, value, formId) => {
    this.setState({
      [formId]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={2}>
          <h2>Submit your Answers</h2>
          <TextField hintText="submit challenge 1" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-1')}/>
          <Divider />
          <TextField hintText="submit challenge 1" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-2')}/>
          <Divider />
          <TextField hintText="submit challenge 3" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-3')}/>
          <Divider />

          <p> On submission we will verify your answers are correct </p>
          <RaisedButton label="Submit Answers" primary={true} onClick={this.submitForm}/>
         <DialogBox open={this.state.open} complete={this.state.complete} handleClose={this.handleClose} />
        </Paper>
      </div>
    );
  }
}
import React,{ Component } from 'react';
import { valChangeActionCreator } from '../actions/valChange.actions';
import { connect } from 'react-redux';
import './input.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class InputView extends Component{
	constructor(props){
		super(props);
		this.inputHandler = this.inputHandler.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err,values) => {
			if(!err){
				console.log('Received values of form:'+values);
			}
		});
	}

	inputHandler(e){
		const { dispatch } = this.props;
		dispatch(valChangeActionCreator(e.target.value));
	}

	render(){
		const { getFieldDecorator } = this.props.form;
		const { userVal } = this.props;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<input type="text" placeholder={userVal}  onChange={this.inputHandler} />

				<FormItem>
					{getFieldDecorator('userName',{
						rules:[{require:true, message: 'Please input your username!'}],
						})(<Input prefix={<Icon type="user" style={{fontSize:13}} />} placeholder="Username" />)
					}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password',{
						rules: [{require:true, message: 'please input your password!'}],
						})(
							<Input prefix={<Icon type="lock" style={{fontSize:13}} />} type="password" placeholder="Password" />
						)
				}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remeber',{
						valuePropName: 'checked',
						initialValue: true,
					})(<Checkbox>Remember me.</Checkbox>)}
				</FormItem>
				<a className="login-form-forgot" href="">Forgot password</a>
				<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
				</Button>
				Or <a>register now!</a>
			</Form>
		)
	}
}

function mapStateToProps(state){
	return {
		userVal: state.userVal,
	}
}

const WrappedInputView = Form.create()(InputView);

const InputContainer = connect(mapStateToProps)(WrappedInputView);
export default InputContainer;
import React, { Component } from 'react'
import {
	Button,
	Card,
	Form,
	Input,
	Row,
	Col,
	InputNumber,
	notification,
	Radio
  } from "antd";
  import {
	UserOutlined,
	MailOutlined,
	LockOutlined,
	MobileOutlined,
  } from "@ant-design/icons";
import smallLogo from "../../Assets/logo-small-2.png";
import "./Signup.css";

const currencyFormatter =  new Intl.NumberFormat('en-IN',{
	style: 'currency',
	currency: 'INR',
	minimumFractionDigits: 0
  })
class SignUp extends Component {

	submit = e => {
		console.log('e',e)
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err){
				notification.success({message: "User Registered successfully"});
				localStorage.setItem('userDetails',JSON.stringify(values));
				this.props.history.push('/profile')
			}
			else{
				console.log("err",err	)
			}
		});
	}

	validateConfirmPass = (rule, value, callback) => {
		const password = this.props.form.getFieldValue("password");
		if (password && password !== value) {
		  callback("Password doesnot match");
		}
		callback();
	  };
	  
	  validateAge = (rule, value, callback) => {
		  if(value && value > 100){
			callback("Age cannot be greater than 100");
		  }
		  else if(value && value <= 0){
			callback("Age must be greater than 0");
		  }
		  callback()
	  }

	  validateSalary = (rule, value, callback) => {
		if(parseInt(value) < 0){
			callback("Salary must be greater than or equal to 0")
		}else if(parseInt(value) > 1000000000){
			callback(`Salary cannot be greater than ${currencyFormatter.format(1000000000)}`)
		}
		callback()
	  }
	render() {
		
		return (
		  <div className={"login-container"}>
			<Row type={"flex"} justify={"space-around"}>
			  <Card
				className={"login"}
				bordered
				title={
				  <Row
					type={"flex"}
					justify={"space-between"}
					className={"login__header"}
				  >
					<img className={"header__logo"} alt={"logo"} src={smallLogo} />
					{/* <span className={"header__signup"}>
					  Already have an account ?{" "}
					</span>
					<Button
					  type={"link"}
					  onClick={() => {
						this.props.history.push("/login");
					  }}
					>
					  {" "}
					  Sign In{" "}
					</Button> */}
				  </Row>
				}
			  >
				<Form
				  onSubmit={this.submit}
				  colon={false}
				  hideRequiredMark={true}
				  className={"login__form"}
				>
				  {/* ---------------------ROW 1 --------------------- */}
				  <Row gutter={30}>
					<Col lg={12} md={12} sm={24}>
					  <Form.Item label={"Username"}>
						{this.props.form.getFieldDecorator("username", {
							initialValue: "Default",
						  rules: [
							{
							  required: true,
							  message: "Please enter username.",
							},
							{
							  min: 3,
							  message: "Mininum 3 characters required.",
							},
							{
							  max: 15,
							  message: "Maximum 15 characters allowed.",
							},
						  ],
						})(<Input prefix={<UserOutlined />} />)}
					  </Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24}>
					<Form.Item label={"Email"}>
						{this.props.form.getFieldDecorator("email", {
						  rules: [
							{
							  required: true,
							  message: "Please enter e-mail address.",
							},
						  ],
						})(<Input type={"email"} prefix={<MailOutlined />} />)}
					  </Form.Item>
					</Col>
				  </Row>
				  {/* ---------------------ROW 2 --------------------- */}
				  <Row gutter={30}>
					<Col lg={12} md={12} sm={24}>
					<Form.Item label={"Password"}>
						{this.props.form.getFieldDecorator("password", {
						  rules: [
							{
							  required: true,
							  message: "Please enter password.",
							},
							{
							  min: 8,
							  message: "Password must be atleast of 8 characters",
							},
						  ],
						})(<Input type={"password"} prefix={<LockOutlined />} />)}
					  </Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24}>
					<Form.Item label={"Age"}>
						{this.props.form.getFieldDecorator("age", {
						  rules: [
							{
							  required: true,
							  message: "Please enter age.",
							},
							{
								validator: this.validateAge
							}
						  ],
						})(<Input type={'number'} prefix={<UserOutlined />} />)}
					  </Form.Item>
					</Col>
				  </Row>
				  {/* ---------------------ROW 3 --------------------- */}
				  <Row gutter={30}>
					<Col lg={12} md={12} sm={24}>
						<Form.Item label={"Phone Number"}>
							{this.props.form.getFieldDecorator("phone_no", {
							rules: [
								{
								required: true,
								message: "Please enter phone number.",
								},
								{
								min: 10,
								message: "Only 10 digits allowed.",
								},
								{
								max: 10,
								message: "Only 10 digits allowed.",
								},
							],
							})(<Input type={"number"} prefix={<MobileOutlined />} />)}
					  </Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24}>
					  <Form.Item label={"Gender"}>
						{this.props.form.getFieldDecorator("gender", {
						initialValue:"M",
						  rules: [
							{
							  required: true,
							  message: "Please select gender.",
							},
						  ],
						})(<Radio.Group>
							<Radio value={"M"}>M</Radio>
							<Radio value={"F"}>F</Radio>
						</Radio.Group>)}
					  </Form.Item>
					</Col>
				  </Row>
				  {/* ---------------------ROW 4 --------------------- */}
				  <Row gutter={30}>
					<Col lg={12} md={12} sm={24}>
					  <Form.Item label={"Address"}>
						{this.props.form.getFieldDecorator("address", {
						  rules: [
							// {
							//   required: true,
							//   message: "Please enter address.",
							// },
						  ],
						})(<Input.TextArea disabled={true} />)}
					  </Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24}>
					  <Form.Item label={"Salary"}>
						{this.props.form.getFieldDecorator("salary", {
						  initialValue: "",
						  rules:[
							  {
								required: true,
								message: "Please enter salary"
							  },
							  {
								validator: this.validateSalary
							  }
							]
						})(<InputNumber 
							min={0}
							max={1000000000}
							parser={(value) => parseInt(value.substr(1).replace(/,/g, '')).toString()}
							formatter={(value) => parseInt(value) > 0 ? currencyFormatter.format(value) : currencyFormatter.format(0)}
						 />)}
					  </Form.Item>
					</Col>
				  </Row>
	
				  <Row className={"form__signin"}>
					<Form.Item>
					  <Button
						className={"signin__button"}
						type={"primary"}
						htmlType={"submit"}
					  >
						Signup
					  </Button>
					</Form.Item>
				  </Row>
				</Form>
			  </Card>
			</Row>
		  </div>
		);
	  }
}

const asd = Form.create('signinform')(SignUp);
export default asd


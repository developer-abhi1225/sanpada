import React, { Component } from 'react'
import {
	Button,
	Card,
	Form,
	Input,
	Row,
	Col,
  } from "antd";
  import {
	UserOutlined,
	MailOutlined,
	LockOutlined,
	MobileOutlined,
  } from "@ant-design/icons";
import smallLogo from "../../Assets/logo-small-2.png";
import "./Signup.css";

class SignUp extends Component {
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
					<span className={"header__signup"}>
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
					</Button>
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
					  <Form.Item label={"First Name"}>
						{this.props.form.getFieldDecorator("first_name", {
						  rules: [
							{
							  required: true,
							  message: "Please enter first name.",
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
					  <Form.Item label={"Last Name"}>
						{this.props.form.getFieldDecorator("last_name", {
						  rules: [
							{
							  required: true,
							  message: "Please enter last name.",
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
				  </Row>
				  {/* ---------------------ROW 2 --------------------- */}
				  <Row gutter={30}>
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
				  </Row>
				  {/* ---------------------ROW 3 --------------------- */}
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
					  <Form.Item label={"Confirm password"}>
						{this.props.form.getFieldDecorator("confirm_password", {
						  rules: [
							{
							  required: true,
							  message: "Please enter password.",
							},
							{
							  validator: this.validateConfirmPass,
							},
						  ],
						})(<Input type={"password"} prefix={<LockOutlined />} />)}
					  </Form.Item>
					</Col>
				  </Row>
				  {/* ---------------------ROW 4 --------------------- */}
				  <Row gutter={30}>
					<Col lg={12} md={12} sm={24}>
					  <Form.Item label={"Address"}>
						{this.props.form.getFieldDecorator("address", {
						  rules: [
							{
							  required: true,
							  message: "Please enter address.",
							},
						  ],
						})(<Input.TextArea />)}
					  </Form.Item>
					</Col>
					<Col lg={12} md={12} sm={24}>
					  <Form.Item label={"Profile pitcure"}>
						{this.props.form.getFieldDecorator("asset", {
						  initialValue: {},
						})(<Input type={"hidden"} />)}
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


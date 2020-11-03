import React from "react";
import UserDetails from "./UserDetails";
import { Layout, Card, Row, Col, Button, notification } from "antd";
import isEmpty from "lodash/isEmpty";
import "./index.css";
const { Footer, Header, Content } = Layout;

class UserProfileView extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){
		let data = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : {};

		if(isEmpty(data)){
			notification.error({message:"Please Sign up to view your Profile"})
			this.props.history.push('/signup')
		}
		else{
			this.setState({...data})
		}
	}
	
	logout = () => {
		localStorage.clear();
		this.props.history.push('/')
	}

	updateDetails = props => {
		this.setState({...props});
		let data = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : {};
		data = {...data, ...props};
		localStorage.setItem('userDetails',JSON.stringify(data))
	}

	render(){
		let {username, age, email, address, phone_no, password, salary} = this.state;
		return (
			<Layout className={"layout"}>
			  <Header className={"layout__header"}></Header>
			  <Content className={"layout__content"}>
			  <Card
				bordered={true}
				title={"User Profile"}
				extra={<Button onClick={this.logout}> Logout </Button>}
			  >
				<Row gutter={30}>
				  <Col lg={16} md={18} sm={12}>
					<Row gutter={30}>
					  <UserDetails
						label={"Username"}
						value={username}
						post_key={"username"}
						updateDetails={this.updateDetails}
					  />
					  <UserDetails
						label={"Age"}
						value={age}
						post_key={"age"}
						updateDetails={this.updateDetails}
					  />
					  <UserDetails
						label={"E-mail"}
						value={email}
						post_key={"email"}
						updateDetails={this.updateDetails}
					  />
					  <UserDetails
						label={"Salary"}
						value={salary}
						post_key={"salary"}
						updateDetails={this.updateDetails}
					  />
					  <UserDetails
						label={"Phone Number"}
						value={phone_no}
						post_key={"phone_no"}
						updateDetails={this.updateDetails}
					  />
					  <UserDetails
						label={"Password"}
						value={password}
						post_key={"password"}
						updateDetails={this.updateDetails}
					  />
					</Row>
				  </Col>
				  <Col lg={8} md={8} sm={12} className={"uploadImage"}>
				  </Col>
				</Row>
			  </Card>
			  </Content>
			</Layout>
		  );
		}
	}


export default UserProfileView;
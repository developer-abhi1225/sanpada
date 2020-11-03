import React, { useState } from "react";
import { Col, Form, Input, Button, Radio, notification } from "antd";
import { EditOutlined } from "@ant-design/icons";

const currencyFormatter =  new Intl.NumberFormat('en-IN',{
	style: 'currency',
	currency: 'INR',
	minimumFractionDigits: 0
  })

function onSubmit(e, props, setShowForm) {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
		  props.updateDetails(values)
		  setShowForm(false);
		  notification.success({message: "Record updated successfully"})
    }
  });
}

function formatValue (props){
	if(props.post_key === "password"){
		return "*********"
	}
	else if(props.post_key === "salary"){
		return currencyFormatter.format(props.value)
	}
	return props.value
}

function getInputField (props){
	if(props.post_key === "email"){
		return <Input type={"email"} />
	}
	else if(props.post_key === "password"){
		return <Input type={"password"} />
	}
	else if(props.post_key === "age" || props.post_key === "phone_no" ){
		return <Input type={'number'} />
	}
	else if(props.post_key === "gender"){
		return <Radio.Group>
		<Radio value={"M"}>M</Radio>
		<Radio value={"F"}>F</Radio>
	</Radio.Group>
	}
	return <Input />
}

function getRules  (props){
	if(props.post_key === "username"){
		return [
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
		  ]
	}
	else if(props.post_key === "email"){
		return [
			{
			  required: true,
			  message: "Please enter e-mail address.",
			},
		  ]
	}
	else if(props.post_key === "password"){
		return  [
			{
			  required: true,
			  message: "Please enter password.",
			},
			{
			  min: 8,
			  message: "Password must be atleast of 8 characters",
			},
		  ]
	}
	else if(props.post_key === "age"){
		return [
			{
			  required: true,
			  message: "Please enter age.",
			},
			{
				validator: (rule, value, callback) => {
					if(value && value > 100){
						callback("Age cannot be greater than 100");
					  }
					  else if(value && value <= 0){
						callback("Age must be greater than 0");
					  }
					  callback()
				}
			}
		  	]
	}
	else if(props.post_key === "phone_no"){
		return [
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
		]
	}
	return []
} 

function UserDetails(props) {
  const [showEditIcon, setShowEditIcon] = useState(false);
  const [showForm, setShowForm] = useState(false);
  let events = {}
  if(!props.readOnly){
	  events = {
		onMouseLeave: (e) => setShowEditIcon(false),
		onMouseEnter: (e) => setShowEditIcon(true)
	  }
  }
  const value = formatValue(props);
  const inputField = getInputField(props);
  const rules = getRules(props);
  return (
    <Col lg={12} md={12} sm={12} className={"userdetails__col"}>
      <React.Fragment>
        <b>{props.label}</b>
        {showForm ? (
          <React.Fragment>
            <Form layout={"inline"} onSubmit={(e) => onSubmit(e, props, setShowForm)}>
              <Form.Item>
                {props.form.getFieldDecorator(`${props.post_key}`, {
				  initialValue: props.value ,
				  rules
                })(inputField)}
              </Form.Item>
              <Form.Item>
                <Button onClick={(e) => setShowForm(false)}> Cancel </Button>
              </Form.Item>
              <Form.Item>
                <Button htmlType={"submit"} type={"primary"}>
                  {" "}
                  Save{" "}
                </Button>
              </Form.Item>
            </Form>
          </React.Fragment>
        ) : (
          <div {...events}>
            <span>{value}</span>
            {showEditIcon && (
              <EditOutlined
                className={"editicon"}
                onClick={(e) => {
                  setShowForm(true) && setShowEditIcon(false);
                }}
              />
            )}
          </div>
        )}
      </React.Fragment>
    </Col>
  );
}

const patchForm = Form.create()(UserDetails);
export default patchForm;
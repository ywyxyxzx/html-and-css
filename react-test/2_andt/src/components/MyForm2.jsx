import React from 'react'
import AForm from './AForm'
import AInput from './AInput'
import { Icon } from 'antd';
class MyForm extends React.Component {
   handleSubmit= (e)=>{
    
    e.preventDefault();
    this.props.form.validateFields((isValid, errorMsg)=>{     
      if(isValid){
        alert('checked pass')
      } else {
          alert(errorMsg || "failed")   
      }
    })
   }
    
  render() {
    const { getFieldDecorator ,isFieldTouched, getFieldError} = this.props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <AForm onSubmit={this.handleSubmit}>
        <AForm.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<AInput type="text" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>)
          }
        </AForm.Item>
        <AForm.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(<AInput type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>)
          }
        </AForm.Item>

        <button type="submit">Submit</button>
      </AForm>
    )
  }
}
const MyForm2 = AForm.create(MyForm);
export default MyForm2
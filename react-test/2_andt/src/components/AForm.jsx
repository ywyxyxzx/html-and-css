import React from 'react'
const MyFormCreate = Comp => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.options = {}; // 各个选项值，变化不会导致重新渲染
      this.errorArr = {};
      this.state = { // 各个字段值，它的变化触发重新渲染
        fields: {},
      }
    }
    validateField = (name)=> {
      // 校验 字段
      const option = this.options[name];
      if (option && option.rules) {
        const rules = option.rules;
        const ret = rules.some(rule => {
          if(rule.required){
            if(!this.state.fields[name]){
              this.errorArr [name + 'Message'] = rule.message
              this.setState({
                [name + 'Message']: rule.message
              })
              return true//校验失败
            };
          }
        })

        if(!ret){ // 通过
          this.errorArr [name + 'Message'] && delete this.errorArr [name + 'Message']
           this.setState({
                [name + 'Message']: ''
              })
        }
        return !ret
      }
    }
    validateFields= (fn)=> {
      
      console.log(Object.keys(this.options))
      const retArr = Object.keys(this.options).map(filterName =>this.validateField(filterName))
      const ret = retArr.every(v=>{
        return v
      })
      let errReason = Object.entries(this.errorArr).length>0 ? Object.entries(this.errorArr)[0][1]:""
      fn(ret,  errReason)
    }
    handleChange = e => {
      const { name, value } = e.target;
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value
        }
      },()=>{
       
        this.validateField(name)
         console.log(this.state.fields, this.state)
      })

    }
    handleFocus= (e)=>{
      const fieldName = e.target.name
      this.setState({
        [fieldName+"Focus"]:true
      })
    }
    isFieldTouched = (fieldName)=>{
      return !!this.state[fieldName+ 'Focus']
    }
    getFieldError = (fieldName)=>{
      return this.state[fieldName+ "Message"]
    }
    getFieldDecorator = (fieldName, option) => {
      this.options[fieldName] = option;
      console.log('options', this.options)
      return (Comp) => {
        return <>{
          React.cloneElement(Comp, {
            name: fieldName,
            value: this.state.fields[fieldName] || '',
            onChange: this.handleChange,
            onFocus: this.handleFocus
          })
        }
        {/* {
          this.state.errorFields[fieldName + 'Message'] && (
            <div style={{ color: 'red' }}>
              {this.state.errorFields[fieldName + 'Message']}
            </div>
          )
        } */}
        </>
      }
    }
    form() {
      return {
        getFieldDecorator: this.getFieldDecorator,
        validateFields: this.validateFields,
        isFieldTouched: this.isFieldTouched,
        getFieldError: this.getFieldError
      }
    }
    render() {
      return (
        <Comp {...this.props} form={this.form()} />
      )
    }
  }
}

class FormItem extends React.Component{
  render(){
    return <>
      {this.props.children}
      {
        this.props.validateStatus && (
            <div style={{ color: 'red' }}>
              {this.props.help}
            </div>
          )
      }
    </>
  }
}



class AForm extends React.Component {
  static Item = FormItem
  static create = Comp => MyFormCreate(Comp)
    
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    )
  }
}
export default AForm
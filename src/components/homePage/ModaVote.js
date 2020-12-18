import React from 'react'
import Modal from 'react-modal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF,faGoogle,faVk } from '@fortawesome/free-brands-svg-icons'
import {faExclamation,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import Checkbox from './CheckBox'

class ModalVote extends React.Component{
    constructor(props){
        super(props)
        this.time = null
        this.state={
           isOpen: false,
           checked: false,
           showNotification: false,
           positionNotification: undefined,
           password:""
        }
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }     
    closeModal(){
      document.body.className -="style1"
      this.props.closeModal();
    }
    openModal(){
      document.body.className +=" style1"
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        return re.test(String(email).toLowerCase());
    }
    validate(email){
      this.setState({showNotification:!this.validateEmail(email)})
      !this.validateEmail(email)&&(this.time = setTimeout(() => {this.setState({showNotification:false})},2000))
      if(this.validateEmail(email)){
      this.state.password==""&&this.setState({showPassword:true})
      this.time = setTimeout(() => {
      console.log("show password")
      this.setState({showPassword:false})},2000)
      }
    }
    render(){
          const theme = {
            color: this.props.settingBox.color,
            themeMode: this.props.settingBox.themeMode,
            activeTab: this.state.activeTab
        }
        Modal.setAppElement('#root')
        if(this.props.openModal){
          this.openModal()
        }
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              overflow              : "hidden",
              transition            : "all 1s"
            }
          };
          return (
            <div id="style2">
              <Modal
                isOpen={this.props.openModal}
                onAfterOpen={() =>this.afterOpenModal()}
                onRequestClose={() =>this.closeModal()}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="modal-voted">
                  <div className="bnt-close">
                    <button onClick={() =>this.closeModal()}>
                    </button>
                  </div>
                  <h2 className="modal-title" >LOGIN</h2>
                  <div className="button-login icon-facebook">
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <span>Connect with Facebook</span>
                  </div>
                  <div className="button-login icon-google">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    <span>Connect with Google</span>
                  </div>
                  <div className="button-login icon-vk">
                    <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>
                    <span>Connect with Vk</span>
                  </div>
                  <p class="p-auth-modal-or">
                    <span>Or login with email</span>
                  </p>
                  <div className="from-login">
                    <input type="text" placeholder="Email Address" onChange={(e) => this.setState({email:e.target.value})}></input>
                    <input type="password" placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}></input>
                    <Checkbox label="Remember Me" theme={theme} className={"check-box-1"} checked={this.state.checked} onChange={()=>this.setState({checked:!this.state.checked})}/>
                    <div className="post-login" style={{backgroundColor:this.props.settingBox.color}} onClick={() =>this.validate(this.state.email)}>LOGIN</div>
                    <div className="post-login forgot">Forgot Password?</div>
                    {this.state.showNotification&&
                    (<div className="notification">
                      <span class="icon"><FontAwesomeIcon icon={faExclamation}></FontAwesomeIcon></span>
                      <span>Vui lòng kiểm tra lại địa chỉ mail.</span>
                    </div>)}
                    {this.state.showPassword&&
                    (<div className="notification password">
                      <span class="icon"><FontAwesomeIcon icon={faExclamation}></FontAwesomeIcon></span>
                      <span>Vui lòng nhập password</span>
                    </div>)}
                  </div>
                </div>
              </Modal>
            </div>
          );
    }
}

export default ModalVote
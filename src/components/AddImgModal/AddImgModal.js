import React from 'react'
import './AddImgModal.css'

export const AddImgModal = ({isActive, closeModal, addCallback}, props) => {
    const [link, setLink] = React.useState()
    const onClose = props

    if(!isActive){
        <></>
    }

    return (

        <div class="log-in-modal">
            <div class="log-in-popup">
                <div class="log-in-p">Log In</div>
                <form className='add-img-modal__form'>
                    <div>
                        <input placeholder='Email' type="email" value={link} onChange={(target) => setLink(target.value)}/>
                    </div>
                    <div>
                        <input placeholder='Password' type="password" value={link} onChange={(target) => setLink(target.value)}/>
                    </div>
                    <div>
                        <button>Log In</button>
                    </div>
                </form>
                <a className="password-forgot">Forgot Password?</a>
                <hr style={{
                    backgroundColor: 'black',
                    width: '300px',
                    height: '3px',
                    borderColor: 'black',
                    color: 'black'
                }}/>
                <div>Don't have an account?
                    <a class="signup"> Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default AddImgModal;
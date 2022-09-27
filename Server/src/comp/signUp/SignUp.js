import { createRef, useState } from "react"

function SignUp(data) {

    const { socket } = data;

    const emailInp = createRef();
    const usernameInp = createRef();
    const emailIndicator = createRef();
    const userNameIndicator = createRef();

    const [notification, setNotification] = useState('')

    function sendUserInfo(email, username) {
        let canSend = true;
        email = validateEmail(email);
        if (email) {
            emailIndicator.current.textContent = 'Ваш Email';
        } else {
            emailIndicator.current.textContent = 'Ошбика в заполнении: Email';
            setNotification('');
            canSend = false;
        }

        if (username.replace(/\s/g, "") == '') {
            userNameIndicator.current.textContent = 'Ошбика в заполнении: Имя';
            setNotification('');
            canSend = false;
        } else {
            userNameIndicator.current.textContent = 'Ваше имя';
        }

        if (canSend) {
            socket.emit('signUp', { username: username, email: email })
        }
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        if (re.test(email) === true) {
            return email;
        } else {
            return false;
        };
    }

    socket.on('signUpNotification', () => {
        setNotification('Вы успешно записались');
    });


    return (
        <div>
            <div>
                <p >{notification}</p>
            </div>
            <div>
                <p ref={emailIndicator}>Ваш Email</p>
                <input ref={emailInp} />
            </div>
            <div>
                <p ref={userNameIndicator}>Ваше имя</p>
                <input ref={usernameInp} />
            </div>
            <button onClick={() => {
                sendUserInfo(emailInp.current.value, usernameInp.current.value);
            }}>Записаться</button>
        </div >
    );
}

export default SignUp;
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('ajmain_portfolio', 'template_k0n2v5a', form.current, 'user_cfhVEncATuJYWXAv7mYSP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="banner__color py-5">
            <h2 className="text-center">Contact</h2>
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="d-flex flex-md-row flex-column">
                        <input className="form-control m-4" type="text" name="name" id="" placeholder="name" />
                        <input className="form-control m-4" type="email" name="user_email" id="" placeholder="email" />
                    </div>
                    <div>
                        <textarea className="form-control" name="message" id="" cols="30" rows="10" placeholder="text here"></textarea>
                    </div>
                    <input className="btn btn-secondary my-3" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
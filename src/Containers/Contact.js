import React from 'react';
import Emailjs from 'emailjs-com';
function Contact() {
    function sendEmail(e){
        e.preventDefault();
        Emailjs.sendForm('service_icoxxfo','template_cj2r89q',e.target,'ZcUbqouXXWpkl1ywa').then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        e.target.reset();
    }
    return (
        <div className='sendEmailerWrap'>
            <div className='container'>
                <div className='row'>
                    <div className='emailerTemp'>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name='name' placeholder="Frist Name" />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" name='email' placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" name='message' placeholder="Message" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
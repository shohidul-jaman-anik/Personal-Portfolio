import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Contact.css';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Contact = () => {
  const [user] = useAuthState(auth);
  const form = useRef();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();



  const onSubmit = data => {

    emailjs.sendForm('service_86b3elp', 'template_huzdope', form.current, 'gJkpNWd5WX7H7BjUB')
      .then((result) => {
        // console.log(result.text);
        toast.success("Message send Sucessfully")
      }, (error) => {
        // console.log(error.text);
        toast.error("Message did't send")
      });
    reset()

    // console.log(data)
    const url = `https://intense-woodland-21531.herokuapp.com/message`
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        reset()
        if (result) {
          // toast('Message send Sucessfully')
        }
      }
      )
  };
  return (
    <div className="backgrounds">
      <div id="contact" className="container section contactContainer">
        <div data-aos="fade-right">
          <p id="contacts_header" className="section__title">
            <Typewriter
              words={['Hi 👋', 'Get in touch 🤗']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={500}
            />
          </p>
          <div className="row contacts">
            <img src="https://i.imgur.com/VRFiMzM.png" alt="IMG" />
          </div>

        </div>

        <form ref={form} onSubmit={handleSubmit(onSubmit)} data-aos="fade-left" className='contactForm'>
          <input
            className='inputStyle p-2'
            value={user?.displayName}
            placeholder="Enter Name"
            {...register("name", { required: true, maxLength: 20 })}
          /> <br />
          <input
            className='inputStyle text-lowercase p-2'
            value={user?.email}
            placeholder="Enter E-mail"
            {...register("email", { required: true, maxLength: 30 })}
          /> <br />

          <textarea
            className='inputStyle h-25 p-2'
            placeholder='Enter Your Message'

            {...register("message",
              {
                maxLength: 250, required: {
                  value: true,
                  message: "Comment is required"
                },
              })}
          /><br />
          <label className="label">
            {errors.message?.type === 'required' && <span className="label-text-alt text-danger">{errors.message.message}</span>}
          </label>

          <input
            data-aos="zoom-in"
            data-aos-duration="1000"
            className='site-btn'
            type="submit"
            value="Send Message"
          />
        </form>

      </div>
    </div>
  );
};

export default Contact;


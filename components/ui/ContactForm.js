import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import useInput from "../../hooks/use-input";
import useDynamicClasses from "../../hooks/use-dynamicClasses";

import classes from "../ui/ContactForm.module.scss";
import Button from "../ui/Button";

import DisplaySuccess from "./SuccessWindow/DisplaySuccess";

const ContactForm = () => {
  const [formSent, setFormSent] = useState(false);

  // Add new state for service selection
  const [selectedServices, setSelectedServices] = useState({
    wordpress: false,
    shopify: false,
    landingPage: false,
    digitalMarketing: false,
    other: false
  });

  // State for "other" service text input
  const [otherServiceText, setOtherServiceText] = useState("");
  
  // Handle checkbox changes
  const serviceChangeHandler = (event) => {
    setSelectedServices({
      ...selectedServices,
      [event.target.name]: event.target.checked
    });
  };
  
  // Handle "other" text input changes
  const otherServiceTextHandler = (event) => {
    setOtherServiceText(event.target.value);
  };

  const successHandler = () => {
    setFormSent(true);
  };

  const isNotEmpty = value => value.trim() !== "";
  const isEmail = value => value.includes("@");

  const form = useRef();

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(isNotEmpty);

  const {
    value: enteredSubject,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isNotEmpty && isEmail);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && subjectIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (nameHasError && subjectHasError && emailHasError && messageHasError) {
      return;
    }

    if (!formIsValid) return;

    // Prepare services string for email
    const servicesSelected = Object.keys(selectedServices)
      .filter(key => selectedServices[key])
      .map(key => {
        if (key === 'other' && otherServiceText) {
          return `Other: ${otherServiceText}`;
        }
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      })
      .join(', ');
    
    // Find and update the hidden input instead of setting property on form element
    const servicesInput = form.current.querySelector('input[name="services"]');
    if (servicesInput) {
      servicesInput.value = servicesSelected;
    }

    emailjs
      .sendForm(
        "service_7ygro38",
        "template_u49xesf",
        form.current,
        "mL8qYhSyVWCZnrgMV"
      )
      .then(
        result => {
          successHandler();
          // Reset services as well
          setSelectedServices({
            wordpress: false,
            shopify: false,
            landingPage: false,
            digitalMarketing: false,
            other: false
          });
          setOtherServiceText("");
        },
        error => {
          console.log(error.text);
          alert(
            `${error.text} . Error! Something went wrong, please try to contact me by phone.`
          );
        }
      );

    resetName();
    resetEmail();
    resetSubject();
    resetMessage();
  };

  const nameInputClasses = useDynamicClasses(nameHasError, nameIsValid);
  const emailInputClasses = useDynamicClasses(emailHasError, emailIsValid);
  const subjectInputClasses = useDynamicClasses(
    subjectHasError,
    subjectIsValid
  );
  const messageInputClasses = useDynamicClasses(
    messageHasError,
    messageIsValid
  );

  return (
    /*
      <DisplaySuccess /> is the success window that pops up when the form is submitted successfully, 
      it becomes closed when the user clicks the 'got it' or 'close' button which
      sends a false boolean to the props.onConfirm function setting the formSent state to false
    */
    <form
      ref={form}
      className={`position-relative d-flex justify-content-center align-items-center flex-col ${classes.contact__form}`}
      onSubmit={formSubmissionHandler}
    >
      {formSent && <DisplaySuccess onConfirm={setFormSent} />}
      <div className={`position-relative align-items-center flex-column justify-content-center d-flex w-100`}>
        <h2 className={`fw-bold text-black text-center ${classes.hire}`}>
          Let&apos;s Take Your Brand To The Next Level&nbsp;&nbsp;🚀
        </h2>
        <p className={`${classes.subheading} fs-4 text-center`}>Get a free strategy consultation to discuss your project. I’ll reply within 24-48 hours.</p>
        <div className={classes.input__box}>
          <input
            className={nameInputClasses}
            placeholder={nameHasError ? "Enter a valid name" : "Enter your name"}
            type="text"
            id="name"
            name="from_name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            autoComplete="true"
          />
          <input
            className={emailInputClasses}
            placeholder={
              emailHasError ? "Enter a valid email" : "Enter your email"
            }
            type="text"
            id="email"
            name="user_email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            autoComplete="true"
          />
          <input
            className={subjectInputClasses}
            placeholder={
              subjectHasError ? "Enter a valid subject" : "Enter your subject"
            }
            type="text"
            id="subject"
            name="subject"
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
            value={enteredSubject}
          />

          <div className={`${classes.service_selection} mb-4`}>
            <p className="fs-4 mb-2 fw-bold">What services are you interested in? (optional)</p>
            
            <div className="d-flex flex-wrap gap-3">
              <div className={`${classes.checkbox_wrapper} form-check`}>
                <input 
                  type="checkbox" 
                  id="wordpress" 
                  name="wordpress" 
                  className="form-check-input" 
                  checked={selectedServices.wordpress}
                  onChange={serviceChangeHandler}
                />
                <label htmlFor="wordpress" className="form-check-label fs-5">WordPress Development</label>
              </div>
              
              <div className={`${classes.checkbox_wrapper} form-check`}>
                <input 
                  type="checkbox" 
                  id="shopify" 
                  name="shopify" 
                  className="form-check-input" 
                  checked={selectedServices.shopify}
                  onChange={serviceChangeHandler}
                />
                <label htmlFor="shopify" className="form-check-label fs-5">Shopify Development</label>
              </div>
              
              <div className={`${classes.checkbox_wrapper} form-check`}>
                <input 
                  type="checkbox" 
                  id="landingPage" 
                  name="landingPage" 
                  className="form-check-input" 
                  checked={selectedServices.landingPage}
                  onChange={serviceChangeHandler}
                />
                <label htmlFor="landingPage" className="form-check-label fs-5">Landing Page Development</label>
              </div>
              
              <div className={`${classes.checkbox_wrapper} form-check`}>
                <input 
                  type="checkbox" 
                  id="digitalMarketing" 
                  name="digitalMarketing" 
                  className="form-check-input" 
                  checked={selectedServices.digitalMarketing}
                  onChange={serviceChangeHandler}
                />
                <label htmlFor="digitalMarketing" className="form-check-label fs-5">Digital Marketing</label>
              </div>
              
              <div className={`${classes.checkbox_wrapper} form-check`}>
                <input 
                  type="checkbox" 
                  id="other" 
                  name="other" 
                  className="form-check-input" 
                  checked={selectedServices.other}
                  onChange={serviceChangeHandler}
                />
                <label htmlFor="other" className="form-check-label fs-5">Other</label>
              </div>
            </div>

            {/* Show text input when "Other" is selected */}
            {selectedServices.other && (
              <input
                type="text"
                className={`${classes.info} mt-2`}
                placeholder="Please specify other services"
                value={otherServiceText}
                onChange={otherServiceTextHandler}
                name="other_service_text"
              />
            )}
            
            {/* Hidden input to store services for emailjs */}
            <input 
              type="hidden" 
              name="services" 
              value={Object.keys(selectedServices)
                .filter(key => selectedServices[key])
                .map(key => key === 'other' ? `Other: ${otherServiceText}` : key)
                .join(', ')} 
            />
          </div>


          <textarea
            className={`${messageInputClasses} ${classes.msg}  ${classes.info}`}
            rows="5"
            placeholder={
              messageHasError ? "Enter a valid message" : "Enter your message"
            }
            id="msg"
            name="message"
            type="text"
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          <div className={classes.hire__btn}>
            <Button
              disabled={!formIsValid}
              name="Contact"
              type="submit"
              value="Send"
            />
          </div>
      </div>
      </div>
    </form>
  );
};

export default ContactForm;
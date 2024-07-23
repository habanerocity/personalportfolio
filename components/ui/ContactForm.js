import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import useInput from "../../hooks/use-input";
import useDynamicClasses from "../../hooks/use-dynamicClasses";

import classes from "../ui/ContactForm.module.scss";
import Button from "../ui/Button";

import DisplaySuccess from "./SuccessWindow/DisplaySuccess";

const ContactForm = () => {
  const [formSent, setFormSent] = useState(false);

  const successHandler = () => {
    setFormSent(true);
    console.log("Success!");
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

    console.log(enteredName);

    console.log("sending email");

    emailjs
      .sendForm(
        "service_7ygro38",
        "template_9hxesra",
        form.current,
        "mL8qYhSyVWCZnrgMV"
      )
      .then(
        result => {
          console.log(result.text);
          successHandler();
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
    <form
      ref={form}
      className={classes.contact__form}
      onSubmit={formSubmissionHandler}
    >
      {formSent && <DisplaySuccess onConfirm={setFormSent} />}
      <div className={classes.flex__container}>
        <h2 className={classes.hire}>
          Let&apos;s Take Your Brand To The Next Level&nbsp;&nbsp;🚀
        </h2>
        <p className="fs-4 text-center">Connect With Me Today to Bring Your Vision to Life</p>
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
          <textarea
            className={`${messageInputClasses} ${classes.msg} ${classes.info}`}
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

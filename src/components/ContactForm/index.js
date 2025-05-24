import React, { lazy, Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import * as S from './styles';
import './stylesForm.css';
import Loader from 'react-loader-spinner';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Row = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row')
);
const Col = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col')
);
const OtherComponent = lazy(() => import('../First.js'));
const Block = lazy(() => import('../Block'));

const ContactForm = ({ title, content, id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast.success('Form sent!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { firstName, email, subject, message, menu, suburb, number } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        firstName,
        email,
        subject,
        message,
        menu,
        suburb,
        number,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        'service_a9ktqlp',
        'template_l0mglga',
        templateParams,
        'user_yw3a8DYtaKOIm8KcBtk2L'
      );
      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" align="middle" justify="center">
          <Col lg={12} md={12} sm={24}>
            <Block padding={true} title={title} content={content} />
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete="off"
            >
              <Col span={24}>
                <input
                  {...register('firstName', {
                    required: {
                      value: true,
                      message: 'Please enter your name',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less',
                    },
                  })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Name *"
                ></input>
                {errors.firstName && (
                  <span className="errorMessage">
                    {errors.firstName.message}
                  </span>
                )}
              </Col>
              <Col span={24}>
                <input
                  type="email"
                  name="email"
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-control formInput"
                  placeholder="JohnSmith@email.com *"
                  id="inputEmail"
                ></input>
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </Col>
              <Col span={24}>
                <input
                  {...register('number', {
                    required: true,
                    pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s.0-9]*$/,
                  })}
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Phone Number *"
                  autoComplete="off"
                ></input>
                {errors.number && (
                  <span className="errorMessage">
                    Please enter your phone number
                  </span>
                )}
              </Col>
              <Col span={24}>
                <input
                  {...register('suburb', {
                    required: {
                      value: true,
                      message: 'Please enter your suburb',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less',
                    },
                  })}
                  type="text"
                  name="suburb"
                  id="suburb"
                  placeholder="Suburb Name*"
                ></input>
                {errors.suburb && (
                  <span className="errorMessage suburb">
                    {errors.suburb.message}
                  </span>
                )}
              </Col>
              <Row type="flex" justify="space-between">
                <Col span={24} lg={12} md={24} sm={24}>
                  <div className="select-wrapper">
                    <select
                      name="menu"
                      id="menu"
                      defaultValue=""
                      {...register('menu', {
                        required: {
                          value: true,
                          message: 'Please select from menu',
                        },
                      })}
                      aria-invalid={errors.menu ? 'true' : 'false'}
                    >
                      <option value="" disabled hidden>
                        What can we help you with? *
                      </option>
                      <option value="Residential">Residential</option>
                      <option value="Strata / Property Maintenance">
                        Strata / Property Maintenance
                      </option>
                      <option value="Commercial">Commercial</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.menu && (
                      <span role="alert" className="errorMessage">
                        {errors.menu.message}
                      </span>
                    )}
                  </div>
                </Col>

                <Col span={24} lg={12} md={24} sm={24}>
                  <input
                    type="text"
                    name="subject"
                    {...register('subject', {
                      required: {
                        value: true,
                        message: 'Please enter a subject',
                      },
                      maxLength: {
                        value: 55,
                        message: 'Subject cannot exceed 55 characters',
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Subject *"
                    id="subject"
                  ></input>
                  {errors.subject && (
                    <span className="errorMessage">
                      {errors.subject.message}
                    </span>
                  )}
                </Col>
              </Row>
              <Col span={24}>
                <textarea
                  rows={3}
                  name="message"
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'Please enter your message',
                    },
                    maxLength: {
                      value: 300,
                      message: 'Please use 300 characters or less',
                    },
                    minLength: {
                      value: 2,
                      message: 'Please use more then  2 characters. max: 300',
                    },
                  })}
                  className="form-control formInput"
                  placeholder="Message *"
                ></textarea>
                {errors.message && (
                  <span className="errorMessage">{errors.message.message}</span>
                )}
              </Col>
              <S.Button
                className="submit-btn"
                disabled={disabled}
                type="submit"
                onClick={() => {
                  register(
                    'firstName',
                    { type: 'focus' },
                    { shouldFocus: true }
                  );
                }}
              >
                Submit
              </S.Button>
            </form>
            <ToastContainer />
          </Col>
          <Col lg={12} md={11} sm={24}>
            <div id="TextAddress">
              <div className="formText">
                <a href="tel:02-9419-7947" id="TextNumber">
                  Ph: (02) 9419 7947
                </a>
              </div>
              <div className="formText">
                <a href="https://goo.gl/maps/hrBNba4G8a1EbgFg6">
                  Unit 17, 4-6 Chaplin Drive Lane Cove West NSW 2066
                </a>
              </div>
            </div>
            <Suspense
              fallback={
                <div>
                  <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={80}
                    width={80}
                  />
                </div>
              }
            >
              <LazyLoadComponent>
                <OtherComponent />
              </LazyLoadComponent>
            </Suspense>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default ContactForm;

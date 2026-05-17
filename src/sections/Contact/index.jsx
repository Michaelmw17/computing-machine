import React, { lazy, Suspense, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Row } from 'antd';
import { Col } from 'antd';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import * as S from './styles';
import './styles.css';
import Spinner from '../../common/Spinner';

const LocationMap = lazy(() => import('../../components/LocationMap'));
const Block = lazy(() => import('../../components/Block'));

// Contact-form submissions go to a Cloudflare Worker that holds the EmailJS
// secrets server-side (see cf-worker/). Set this env var to the deployed
// Worker URL — locally in .env.local, on prod in Amplify env vars.
const CONTACT_API_URL = process.env.REACT_APP_CONTACT_API_URL;

if (process.env.NODE_ENV !== 'production' && !CONTACT_API_URL) {
  // eslint-disable-next-line no-console
  console.warn(
    'REACT_APP_CONTACT_API_URL missing. The contact form will fail until you set it. See cf-worker/README.md.',
  );
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  // Time-gate: bots auto-fill and submit in milliseconds. Humans need at least
  // a few seconds to read placeholders and type. Reject anything faster.
  const mountedAt = useRef(Date.now());
  const MIN_FILL_MS = 3000;

  const showSuccessToast = () => {
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

  const showErrorToast = () => {
    toast.error(
      'Sorry, we couldn’t send your message. Please call us on (02) 9419 7947 or try again.',
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 6000,
        className: 'submit-feedback error',
        toastId: 'notifyToastError',
      },
    );
  };

  const onSubmit = async (formData) => {
    // Honeypot: real users never see/fill this field. Bots fill every input.
    // (The Worker also enforces these, but checking client-side avoids a
    // pointless network round-trip when we already know it's spam.)
    const filledTooFast = Date.now() - mountedAt.current < MIN_FILL_MS;
    if (formData.website || filledTooFast) {
      reset();
      showSuccessToast();
      return;
    }
    if (!CONTACT_API_URL) {
      showErrorToast();
      return;
    }
    setDisabled(true);
    const payload = {
      ...formData,
      subject:
        formData.subject ||
        `Website enquiry from ${formData.firstName || 'a visitor'}`,
      formAgeMs: Date.now() - mountedAt.current,
    };
    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Bad response: ${response.status}`);
      reset();
      showSuccessToast();
    } catch (err) {
      showErrorToast();
    } finally {
      setDisabled(false);
    }
  };

  return (
    <S.ContactContainer id="Team">
      <S.Contact>
        <Row type="flex" align="middle" justify="center">
          <Col lg={12} md={12} sm={24}>
            <Block padding={true} title="Contact Us" />
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete="off"
            >
              {/* Honeypot — hidden from real users, bots fill every input */}
              <input
                {...register('website')}
                type="text"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
              />

              <Col span={24}>
                <input
                  {...register('firstName', {
                    required: 'Please enter your name',
                    maxLength: {
                      value: 60,
                      message: 'Please use 60 characters or less',
                    },
                  })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Your name *"
                  aria-label="Your name"
                  aria-required="true"
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  autoComplete="name"
                />
                {errors.firstName && (
                  <span className="error-message">
                    {errors.firstName.message}
                  </span>
                )}
              </Col>

              <Col span={24}>
                <input
                  {...register('number', {
                    required: 'Please enter a phone number we can reach you on',
                    pattern: {
                      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s.0-9]*$/,
                      message: 'Please enter a valid phone number',
                    },
                  })}
                  type="tel"
                  inputMode="tel"
                  name="number"
                  id="number"
                  placeholder="Phone number *"
                  aria-label="Phone number"
                  aria-required="true"
                  aria-invalid={errors.number ? 'true' : 'false'}
                  autoComplete="tel"
                />
                {errors.number && (
                  <span className="error-message">{errors.number.message}</span>
                )}
              </Col>

              <Col span={24}>
                <textarea
                  rows={4}
                  name="message"
                  {...register('message', {
                    required: 'Tell us briefly what you need help with',
                    maxLength: {
                      value: 500,
                      message: 'Please use 500 characters or less',
                    },
                  })}
                  className="form-control formInput"
                  placeholder="How can we help? *"
                  aria-label="How can we help?"
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <span className="error-message">{errors.message.message}</span>
                )}
              </Col>

              <Row type="flex" gutter={[12, 0]}>
                <Col xs={24} md={12}>
                  <div className="select-wrapper">
                    <select
                      name="menu"
                      id="menu"
                      defaultValue=""
                      aria-label="Type of work"
                      {...register('menu')}
                    >
                      <option value="" disabled hidden>
                        Type of work (optional)
                      </option>
                      <option value="Residential">Residential</option>
                      <option value="Strata / Property Maintenance">
                        Strata / Property Maintenance
                      </option>
                      <option value="Commercial">Commercial</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <input
                    type="text"
                    name="suburb"
                    {...register('suburb', {
                      maxLength: {
                        value: 60,
                        message: 'Please use 60 characters or less',
                      },
                    })}
                    placeholder="Suburb (optional)"
                    id="suburb"
                    aria-label="Suburb"
                    autoComplete="address-level2"
                  />
                  {errors.suburb && (
                    <span className="error-message suburb">
                      {errors.suburb.message}
                    </span>
                  )}
                </Col>
              </Row>

              <Col span={24}>
                <input
                  type="email"
                  name="email"
                  {...register('email', {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className="form-control formInput"
                  placeholder="Email (optional)"
                  id="inputEmail"
                  aria-label="Email address"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </Col>
              <S.Button
                className="submit-btn"
                disabled={disabled}
                type="submit"
              >
                {disabled ? 'Sending…' : 'Send enquiry'}
              </S.Button>
            </form>
            <ToastContainer />
          </Col>
          <Col lg={12} md={11} sm={24}>
            <div id="TextAddress">
              <div className="form-text">
                <a href="tel:02-9419-7947" id="TextNumber">
                  Ph: (02) 9419 7947
                </a>
              </div>
              <div className="form-text">
                <a href="https://goo.gl/maps/hrBNba4G8a1EbgFg6">
                  Unit 17, 4-6 Chaplin Drive Lane Cove West NSW 2066
                </a>
              </div>
            </div>
            <LazyLoadComponent
              threshold={200}
              placeholder={
                <div
                  aria-hidden="true"
                  style={{
                    height: 350,
                    maxWidth: 580,
                    margin: '10px 20px',
                    borderRadius: 14,
                    background:
                      'linear-gradient(135deg, #f3f5f7 0%, #e8ecef 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999',
                    fontSize: '0.95rem',
                  }}
                >
                  Map loading…
                </div>
              }
            >
              <Suspense
                fallback={
                  <div
                    style={{
                      height: 350,
                      maxWidth: 580,
                      margin: '10px 20px',
                      borderRadius: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#f3f5f7',
                    }}
                  >
                    <Spinner />
                  </div>
                }
              >
                <LocationMap />
              </Suspense>
            </LazyLoadComponent>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default Contact;

export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.number) {
    errors.number = "Number is required";
  } else if (/^\d{10}$/.test(values.email)) {
    errors.number = "Number is invalid";
  }
  if (!values.suburb) {
    errors.suburb = "Suburb is required";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}

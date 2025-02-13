export const FORM_STEPS = {
  SCHOOL_VALIDATION: 'school',
  SIGNUP: 'signup',
  WELCOME: 'welcome'
};

export const formValidationSchema = {
  [FORM_STEPS.SIGNUP]: {
    firstName: {
      required: 'First name is required',
      pattern: {
        value: /^[A-Za-z]+$/,
        message: 'Only letters are allowed'
      }
    },
    lastName: {
      required: 'Last name is required',
      pattern: {
        value: /^[A-Za-z]+$/,
        message: 'Only letters are allowed'
      }
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address'
      }
    },
    phone: {
      required: 'Phone number is required',
      pattern: {
        value: /^\d{10}$/,
        message: 'Phone number must be 10 digits'
      }
    },
    agreed: {
      required: 'You must agree to the terms'
    }
  }
};

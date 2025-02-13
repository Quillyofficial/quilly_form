import { useState, useCallback } from 'react';
import { formValidationSchema } from '../formConfig';

export const useFormValidation = (step, initialData = {}) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validateField = useCallback((name, value) => {
    const fieldValidation = formValidationSchema[step]?.[name];
    if (!fieldValidation) return '';

    if (fieldValidation.required && !value) {
      return fieldValidation.required;
    }

    if (fieldValidation.pattern && !fieldValidation.pattern.value.test(value)) {
      return fieldValidation.pattern.message;
    }

    return '';
  }, [step]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    const error = validateField(name, fieldValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formValidationSchema[step] || {}).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [step, formData, validateField]);

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setFormData
  };
};

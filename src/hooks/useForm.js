import { useState, useEffect } from 'react';

const useForm = (onSubmit, initialValues) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (initialValues) setValues({ ...initialValues });
  }, [initialValues]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
    setValues({});
  };

  const handleClear = () => {
    setValues({});
  };

  return { values, handleChange, handleSubmit, handleClear };
};

export default useForm;

import React, { useRef, useState, useCallback } from 'react';

export default function useForm() {
  const [values, setValues] = useState({});
  const API = {
    values,
    setValues
  };
  const Form = useCallback(
    ({ children }) => (
      <form>
        {JSON.stringify(Form.API.values, null, 2)}
        {children}
      </form>
    ),
    []
  );

  Form.API = API;

  return {
    values,
    setValues,
    Form
  };
}

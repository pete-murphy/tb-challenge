import { useRef, useState, useCallback } from 'react';

export default function useInput({ defaultValue, onChange } = {}) {
  const [value, setValue] = useState(defaultValue);

  const onChangeRef = useRef();

  onChangeRef.current = onChange;

  const handleChange = useCallback(
    e => {
      window.OCREF !== onChange && console.warn('THIS CHANGED');
      window.OCREF = onChange;
      setValue(e.target.value);
      onChange(e.target.value);
      // onChangeRef.current && onChangeRef.current(e.target.value);
    },
    [setValue, onChange]
  );

  return props => ({
    onChange: handleChange,
    value,
    ...props
  });
}

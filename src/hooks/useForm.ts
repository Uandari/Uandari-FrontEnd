import { useState } from 'react';

const useForm = <T>(
  _initialState: T,
  onSubmit: (form: T) => void,
) => {
  const [state, setState] = useState(
    _initialState as T & Record<string, unknown>,
  );
  const [errors, setErrors] = useState({} as Record<string, string>);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState(_initialState as T & Record<string, unknown>);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const errorsAux = {} as Record<string, string>;

    if (Object.keys(errorsAux).length === 0) {
      onSubmit(state);
      reset();
    } else {
      setErrors(errorsAux);
    }
  };

  return {
    state,
    setState,
    handleInputChange,
    reset,
    errors,
    handleSubmit,
  };
};

export default useForm;

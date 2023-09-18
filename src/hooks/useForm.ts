import { useState } from 'react';

const useForm = <T>(
  _initialState: T,
  onSubmit: (form: T) => void,
) => {
  const [state, setState] = useState(
    _initialState as T & Record<string, unknown>,
  );
  const [errors, setErrors] = useState({} as Record<string, string>);

  const isValidInput = (
    functionValidationRegex: (value: string) => string | undefined,
    name: string,
    minLength?: number,
    maxLength?: number,
  ) => {
    const value = state[name] as string;
    const messageRegex = functionValidationRegex(value);

    let errorMessage = '';

    if (minLength && maxLength) {
      if (value.length < minLength && value.length > maxLength) {
        errorMessage = `, (La longitud debe estar entre ${minLength} - ${maxLength})`;
      }
    } else if (minLength && value.length < minLength) {
      errorMessage = `, (La longitud debe ser mayor a ${minLength})`;
    } else if (maxLength && value.length > maxLength) {
      errorMessage = `, (La longitud debe ser menor a ${maxLength})`;
    }

    if (messageRegex || errorMessage) {
      return messageRegex
        ? messageRegex + errorMessage
        : errorMessage.split(',')[1];
    }

    return undefined;
  };

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

    configs.forEach((config) => {
      const { name, functionValidationRegex, minLength, maxLength } = config;

      const errorMessage = isValidInput(
        functionValidationRegex,
        name,
        minLength,
        maxLength,
      );

      if (errorMessage) {
        errorsAux[name] = errorMessage;
      }
    });

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

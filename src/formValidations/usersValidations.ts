import { ConfigValidation } from '@hooks/useForm';
import { isEmail, isOptional, isRequired } from '@utils/validations';

export const usersCreateValidation: ConfigValidation[] = [
  {
    name: 'name',
    functionValidationRegex: isRequired,
  },
  {
    name: 'lastnames',
    functionValidationRegex: isRequired,
  },
  {
    name: 'controlNumber',
    functionValidationRegex: isRequired,
  },
  {
    name: 'mail',
    functionValidationRegex: isEmail,
  },
  {
    name: 'password',
    functionValidationRegex: isRequired,
  },
  {
    name: 'idRole',
    functionValidationRegex: isRequired,
  },
];

export const usersUpdateValidations: ConfigValidation[] = [
  {
    name: 'name',
    functionValidationRegex: isRequired,
  },
  {
    name: 'lastNames',
    functionValidationRegex: isRequired,
  },
  {
    name: 'controlNumber',
    functionValidationRegex: isRequired,
  },
  {
    name: 'mail',
    functionValidationRegex: isEmail,
  },
  {
    name: 'password',
    functionValidationRegex: isOptional,
  },
  {
    name: 'idRole',
    functionValidationRegex: isRequired,
  },
];

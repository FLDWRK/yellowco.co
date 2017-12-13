import validator from 'validator';

export default function(value) {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email address`;
  }
}

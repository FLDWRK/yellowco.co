export default function(value, props) {
  if (!value.toString().trim().length) {
    if (props.label) {
      return `${props.label} is required`;
    } else {
      return 'This field is required';
    }
  }
}

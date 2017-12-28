// @flow

type Props = {
  label: string
};

export default function(value: string, props: Props) {
  if (!value.toString().trim().length) {
    if (props.label) {
      return `${props.label} is required`;
    } else {
      return 'This field is required';
    }
  }
}

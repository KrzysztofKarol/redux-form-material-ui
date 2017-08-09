import { RadioGroup } from 'material-ui-next/Radio'
import createComponent from './createComponent'

export default createComponent(RadioGroup, ({
  input: { value, ...inputProps },
  selectedValue,
  meta,
  ...props
}) => ({
  ...inputProps,
  ...props,
  selectedValue: value
}))

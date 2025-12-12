import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'isPositive', async: false })
export class IsPositive implements ValidatorConstraintInterface {
  validate(value: number) {
    return value > 0;
  }

  defaultMessage() {
    return 'Value must be positive';
  }
}

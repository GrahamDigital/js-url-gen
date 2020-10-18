import normalizeExpression from '../../utils/normalizeExpression';

/**
 * @description
 * Used for variable or conditional expressions
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/user_defined_variables#arithmetic_expressions |
  * Arithmetic expressions }
 * @namespace Expression
 * @memberOf Values
 */

/**
 * @description sets expression
 * @class ExpressionObject
 */
export class ExpressionObject {
  readonly value:string;
  constructor(value?:string) {
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
}
/**
 *@@doc
 * @description An expression helper/builder function that transforms an input into an expression.
 * @memberOf Values.Expression
 * @param {string} expression The string representing expression.
 * @return {ExpressionObject}
 */
function expression(expression: string): ExpressionObject{
  return new ExpressionObject(normalizeExpression(expression));
}

export default {expression};
export {expression};

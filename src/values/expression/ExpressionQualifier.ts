import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @namespace Expression
 * @class Expression
 * @memberOf Values.Expression
 * @extends {SDK.QualifierValue}
 */
class ExpressionQualifier extends QualifierValue {
  readonly value: string;

  constructor(value?: string) {
    super();
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
}

export { ExpressionQualifier} ;

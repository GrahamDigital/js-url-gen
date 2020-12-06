import QualifierValue from "../../../../qualifier/QualifierValue";

/**
 * @memberOf Values.Compass
 * @extends {SDK.QualifierValue}
 */
class CompassQualifier extends QualifierValue {
  // Creates a unique type of TypeScript so it can distinguish between QualifierValue and Compass
  private type: 'Compass'
  readonly val: string;

  constructor(val: string) {
    super();
    this.val = val;
  }

  toString(): string {
    return this.val;
  }
}

export {CompassQualifier};

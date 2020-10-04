import Action from "../../Action";
import Qualifier from "../../../qualifier/Qualifier";

/**
 * @@doc
 * Enhances an image to its best visual quality with the Viesus Automatic Image Enhancement add-on.</br>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/viesus_automatic_image_enhancement_addon | Viesus Automatic Image Enhancement.}
 */
class ViesusCorrectAdjustAction extends Action {
  private _noRedEye : boolean;
  private _skinSaturation: boolean;
  private _skinSaturationLevel: number;

  /**
   * @description Removes red eyes in the image.
   */
  noRedEye() {
    this._noRedEye = true;
    return this;
  }

  /**
   * @description The enhancement level. (Range: -100 to 100, Server default: 50).
   * @param level
   */
  skinSaturation(level?:number) {
    this._skinSaturation = true;
    if (level) {
      this._skinSaturationLevel = level;
    }
    return this;
  }

  protected prepareQualifiers() {
    let value = 'viesus_correct';

    if (this._noRedEye) {
      value += ':no_redeye';
    }

    if (this._skinSaturation) {
      value += ':skin_saturation';
      if (typeof this._skinSaturationLevel !== 'undefined') {
        value += `:${this._skinSaturationLevel}`;
      }
    }

    this.addQualifier(new Qualifier('e', value));
  }
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Enhances an image to its best visual quality with the Viesus Automatic Image Enhancement add-on.</br>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/viesus_automatic_image_enhancement_addon | Viesus Automatic Image Enhancement.}
 */
function viesusCorrect(): ViesusCorrectAdjustAction {
  return new ViesusCorrectAdjustAction();
}

export default viesusCorrect;

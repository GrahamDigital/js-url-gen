import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import ResizeAdvancedAction from "./ResizeAdvancedAction.js";


/**
 * @description Defines how to crop an asset
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeCropAction extends ResizeAdvancedAction {
  /**
   * @description Horizontal position for custom-coordinates based cropping.
   * @param {number} x The x position.
   */
  x(x: number | string): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Vertical position for custom-coordinates based cropping
   * @param {number} y The y position.
   */
  y(y: number | string): this {
    return this.addQualifier(new Qualifier('y', y));
  }

  /**
   * @description Controls how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection.
   * @param {number | string} z The zoom factor. (Default: 1.0)
   */
  zoom(z: number | string): this {
    return this.addQualifier(new Qualifier('z', z));
  }
}


export default ResizeCropAction;

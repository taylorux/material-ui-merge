import FabM from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import React from "react";

function FabRoundUXP(props) {
  return <FabM {...props}>{props.children}{props.label}</FabM>;
}

FabRoundUXP.propTypes = {
 
  /**
   * The content of the button.
   */
  children: PropTypes.node,
 
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
  * If `true`, the button will be disabled.
  */
  disabled: PropTypes.bool,

   /**
   * OnClick event
   */
  onClick: PropTypes.func,

};

export { FabRoundUXP as default };

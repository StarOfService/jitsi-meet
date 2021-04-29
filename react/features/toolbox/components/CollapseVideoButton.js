import { translate } from "../../base/i18n";
import { IconCollapseVideoSOS, IconExpandVideoSOS } from "../../base/icons";
import { connect } from "../../base/redux";
import { sendEvent } from "../../mobile/external-api/functions"
import {
    AbstractButton,
    type AbstractButtonProps,
} from "../../base/toolbox/components";

type Props = AbstractButtonProps & {
    dispatch: Function,
};

class CollapseVideoButton extends AbstractButton<Props, *> {
    accessibilityLabel = "toolbar.accessibilityLabel.collapseVideo";
    icon = IconCollapseVideoSOS;
    label = "toolbar.collapseVideo";
    toggledIcon = IconExpandVideoSOS;

    /**
     * Handles clicking / pressing the button, and opens a confirmation dialog.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        sendEvent(this.props.state, 'COLLAPSE_VIDEO', {});
    }
}

/**
 * Maps part of the redux state to the component's props.
 *
 * @param {Object} state - The redux store/state.
 * @param {Props} ownProps - The component's own props.
 * @returns {Object}
 */
function _mapStateToProps(state: Object, ownProps: Props) {
    return {
        state: state
    };
}

export default translate(connect(_mapStateToProps)(CollapseVideoButton));

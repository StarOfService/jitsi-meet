// @flow

import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon, IconBack, IconCameraToggle } from "../../../base/icons";

import { toggleCameraFacingMode } from "../../../base/media";
import { getConferenceName } from "../../../base/conference";
import { getFeatureFlag, MEETING_NAME_ENABLED } from "../../../base/flags";
import { connect } from "../../../base/redux";
import { PictureInPictureButton } from "../../../mobile/picture-in-picture";
import { isToolboxVisible } from "../../../toolbox";

import ConferenceTimer from "../ConferenceTimer";
import styles, { NAVBAR_GRADIENT_COLORS } from "./styles";

type Props = {
    /**
     * Name of the meeting we're currently in.
     */
    _meetingName: string,

    /**
     * Whether displaying the current meeting name is enabled or not.
     */
    _meetingNameEnabled: boolean,

    /**
     * True if the navigation bar should be visible.
     */
    _visible: boolean,
};

/**
 * Implements a navigation bar component that is rendered on top of the
 * conference screen.
 */
class NavigationBar extends Component<Props> {
    /**
     * Implements {@Component#render}.
     *
     * @inheritdoc
     */
    render() {
        if (!this.props._visible) {
            return null;
        }

        return [
            <View key={2} pointerEvents="box-none" style={styles.navBarWrapper}>
                <PictureInPictureButton styles={styles.navBarButton} />
                <View pointerEvents="box-none" style={styles.roomNameWrapper}>
                    {this.props._meetingNameEnabled && (
                        <>
                            <Text numberOfLines={1} style={styles.roomName}>
                                {this.props._meetingName}
                            </Text>
                            <Text numberOfLines={1} style={styles.serviceName}>
                                Service Name
                            </Text>
                        </>
                    )}
                    <ConferenceTimer />
                </View>
                <BackButton />
                <SwitchCamButton dispatch={this.props.dispatch} />
            </View>,
        ];
    }
}

function BackButton() {
    return (
        <TouchableOpacity
            onPress={function () {
                console.log("Back button clicked");
            }}
            style={{
                backgroundColor: "#F9F9F9",
                borderRadius: 20,
                height: 40,
                position: "absolute",
                left: 16,
                top: 0,
                justifyContent: "center",
                width: 40,
                zIndex: 10,
            }}
        >
            <Icon src={IconBack} size={20} style={{ marginLeft: 8 }} />
        </TouchableOpacity>
    );
}

function SwitchCamButton(props) {
    return (
        <TouchableOpacity
            onPress={function () {
                props.dispatch(toggleCameraFacingMode());
            }}
            style={{
                alignItems: "center",
                backgroundColor: "#F9F9F9",
                borderRadius: 20,
                height: 40,
                position: "absolute",
                right: 16,
                top: 0,
                justifyContent: "center",
                width: 40,
                zIndex: 10,
            }}
        >
            <Icon src={IconCameraToggle} size={20} />
        </TouchableOpacity>
    );
}

/**
 * Maps part of the Redux store to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @returns {Props}
 */
function _mapStateToProps(state) {
    return {
        _meetingName: getConferenceName(state),
        _meetingNameEnabled: getFeatureFlag(state, MEETING_NAME_ENABLED, true),
        _visible: isToolboxVisible(state),
    };
}

export default connect(_mapStateToProps)(NavigationBar);

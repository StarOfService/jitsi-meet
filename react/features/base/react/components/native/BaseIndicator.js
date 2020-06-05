// @flow

import React, { Component } from "react";
import { View } from "react-native";

import { Icon } from "../../../icons";
import { type StyleType } from "../../../styles";

import styles from "./indicatorstyles";

type Props = {
    /**
     * True if a highlighted background has to be applied.
     */
    highlight: boolean,

    /**
     * The name of the icon to be used as the indicator.
     */
    icon: string,

    /**
     * Additional style to be applied to the icon element.
     */
    iconStyle: StyleType,
};

/**
 * Implements a base indicator to be reused across all native indicators on
 * the filmstrip.
 */
export default class BaseIndicator extends Component<Props> {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        const { highlight, icon, iconStyle } = this.props;
        return (
            <View
                style={[
                    highlight ? styles.highlightedIndicator : null,
                    { alignItems: "center", width: 30 },
                    {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: 4,
                        padding:2,
                        marginLeft: 5,
                    }
                ]}
            >
                <Icon
                    color={iconStyle?.color || "#141C1E"}
                    size={20}
                    src={icon}
                    style={[styles.indicator, iconStyle]}
                />
            </View>
        );
    }
}

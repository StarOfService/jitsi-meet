// @flow

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '../../icons';

import AbstractToolboxItem from './AbstractToolboxItem';
import type { Props } from './AbstractToolboxItem';

/**
 * Native implementation of {@code AbstractToolboxItem}.
 */
export default class ToolboxItem extends AbstractToolboxItem<Props> {
    /**
     * Renders the {@code Icon} part of this {@code ToolboxItem}.
     *
     * @private
     * @returns {ReactElement}
     */
    _renderIcon() {
        const { styles } = this.props;

        return (
            <Icon
            size={20}
                src = { this.props.icon }
                style = { styles && styles.iconStyle } />
        );
    }

    /**
     * Renders this {@code ToolboxItem}. Invoked by {@link AbstractToolboxItem}.
     *
     * @override
     * @protected
     * @returns {ReactElement}
     */
    _renderItem() {
        const {
            disabled,
            elementAfter,
            onClick,
            showLabel,
            styles,
            toggled
        } = this.props;

        let children = this._renderIcon();

        // XXX When using a wrapper View, apply the style to it instead of
        // applying it to the TouchableHighlight.
        let style = styles && styles.style;

        if (showLabel) {
            // XXX TouchableHighlight requires 1 child. If there's a need to
            // show both the icon and the label, then these two need to be
            // wrapped in a View.
            children = (
                <View style = { style }>
                    { children }
                    <Text style = { styles && styles.labelStyle }>
                        { this.label }
                    </Text>
                    { elementAfter }
                </View>
            );

            // XXX As stated earlier, the style was applied to the wrapper View
            // (above).
            style = undefined;
        }

        return (
            <TouchableOpacity
                accessibilityLabel = { this.accessibilityLabel }
                accessibilityRole = 'button'
                accessibilityState = {{ 'selected': toggled }}
                activeOpacity={0.8}
                disabled = { disabled }
                onPress = { onClick }
                style = { style }
                testID={this.props.testID}
                underlayColor = { styles && styles.underlayColor } >
                { children }
            </TouchableOpacity>
        );
    }
}

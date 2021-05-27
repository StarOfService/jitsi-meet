// @flow

import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

/**
 * The type of the React {@link Component} props of {@link Pressable}.
 */
type Props = {
    children: React$Node,

    /**
     * Called when the touch is released, but not if cancelled (e.g. by a scroll
     * that steals the responder lock).
     */
    onPress: Function
};

/**
 * Adds support for {@code onPress} to a child React {@link Component} (which
 * should probably not support the prop in question; otherwise, there's little
 * point of using {@code Pressable} then in the first place).
 */
export default class Pressable extends Component<Props> {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {React$Node}
     */
    render() {
        // onPress
        const { children, onPress } = this.props;

        if (onPress) {
            return (
                <TouchableWithoutFeedback onPress = { onPress } style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    { children }
                </TouchableWithoutFeedback>
            );
        }

        // A Pressable without an onPress is a "no-op".
        return children;
    }
}

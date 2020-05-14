// @flow

import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

/**
 * Returns native element to be rendered.
 *
 * @param {string} timerValue - String to display as time.
 *
 * @returns {ReactElement}
 */
export default function renderConferenceTimer(timerValue: string) {
    return (
        <View style={{ marginTop: 10 }}>
            <View
                style={{
                    backgroundColor: "rgba(20, 28, 30, 0.5)",
                    borderRadius: 10,
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            />
            <Text numberOfLines={4} style={styles.roomTimer}>
                {timerValue}
            </Text>
        </View>
    );
}

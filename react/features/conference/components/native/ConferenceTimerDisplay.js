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
                    paddingHorizontal: 10
                }}>
                <Text style={styles.roomTimer}>
                    {timerValue}
                </Text>
            </View>
        </View>
    );
}

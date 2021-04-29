// @flow

import { ColorPalette } from '../../../base/styles';

export default {
    displayNameBackdrop: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: ColorPalette.darkBackground,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    displayNameBackground: {
        backgroundColor: '#3C3F45',
        borderRadius: 5,
        bottom: 0,
        left: 0,
        opacity: 0.8,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    displayNameText: {
        color: ColorPalette.white,
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
        marginRight: 5
    },
    image: {
        alignSelf: 'center',
        height: 20,
        width: 20
    }
};

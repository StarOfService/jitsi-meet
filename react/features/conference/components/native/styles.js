import { ColorSchemeRegistry, schemeColor } from '../../../base/color-scheme';
import { BoxModel, ColorPalette, fixAndroidViewClipping } from '../../../base/styles';
import { FILMSTRIP_SIZE } from '../../../filmstrip';

export const INSECURE_ROOM_NAME_LABEL_COLOR = ColorPalette.warning;

/**
 * The styles of the feature conference.
 */
export default {
    cameraSwitchButton: {
        alignItems: 'center',
        height: 36,
        justifyContent: 'center',
        width: 36
    },
    /**
     * {@code Conference} style.
     */
    conference: fixAndroidViewClipping({
        alignSelf: 'stretch',
        backgroundColor: '#141C1E',
        flex: 1
    }),
    conferenceTimerContainer: {
            alignSelf: "center",
            marginBottom: 15,
            marginTop: 20,
    },
    conferenceTimerText: {
            color: "#FFF",
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 22,
    },

    displayNameContainer: {
        margin: 10
    },

    /**
     * View that contains the indicators.
     */
    indicatorContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    /**
     * Indicator container for wide aspect ratio.
     */
    indicatorContainerWide: {
        marginRight: FILMSTRIP_SIZE + BoxModel.margin
    },

    labelWrapper: {
        flexDirection: 'column',
        position: 'absolute',
        right: 0,
        top: 0
    },

    localVideoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 16,
        paddingRight: 16
    },

    lonelyButton: {
        alignItems: 'center',
        borderRadius: 24,
        flexDirection: 'row',
        height: 48,
        justifyContent: 'space-around',
        paddingHorizontal: 12
    },

    lonelyButtonComponents: {
        marginHorizontal: 6
    },

    lonelyMeetingContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: BoxModel.padding * 2
    },

    lonelyMessage: {
        paddingVertical: 12
    },

    navBarButton: {
        iconStyle: {
            color: ColorPalette.white,
            fontSize: 24
        },

        underlayColor: 'transparent'
    },

    navBarContainer: {
        flexDirection: 'column',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },

    navBarSafeView: {
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },

    navBarWrapper: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'space-between',
        paddingHorizontal: 14
    },

    roomTimer: {
        color: ColorPalette.white,
        fontSize: 12,
        fontWeight: '400'
    },

    roomTimerView: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
        height: 28,
        justifyContent: 'center',
        paddingHorizontal: 10
    },

    roomName: {
        color: ColorPalette.white,
        fontSize: 14,
        fontWeight: '400'
    },

    roomNameView: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
        height: 28,
        justifyContent: 'center',
        paddingHorizontal: 10
    },

    roomNameContainer: {
        alignItems: 'center',
        left: 0,
        paddingHorizontal: 48,
        position: 'absolute',
        right: 0
    },

    roomNameWrapper: {
        alignItems: 'center',
        flexDirection: 'row'
    },

    /**
     * The style of the {@link View} which expands over the whole
     * {@link Conference} area and splits it between the {@link Filmstrip} and
     * the {@link Toolbox}.
     */
    overlayContainer: {
        // backgroundColor: '#141C1E',
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
    overlayEndCallButton: {
        alignItems: 'center',
        backgroundColor: '#F8644A',
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    overlayEndCallButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
        marginLeft: 8
    },
    overlayHeader: {
        alignItems: 'center',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    } ,

    insecureRoomNameLabel: {
        backgroundColor: INSECURE_ROOM_NAME_LABEL_COLOR
    }
};

ColorSchemeRegistry.register('Conference', {
    lonelyButton: {
        backgroundColor: schemeColor('inviteButtonBackground')
    },

    lonelyMessage: {
        color: schemeColor('onVideoText')
    }
});

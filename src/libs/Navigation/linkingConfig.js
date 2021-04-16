import ROUTES from '../../ROUTES';

export default {
    prefixes: [
        'expensify-cash://',
        'https://expensify.cash',
        'https://www.expensify.cash',
        'https://staging.expensify.cash',
        'http://localhost',
    ],
    config: {
        screens: {
            Home: {
                path: ROUTES.HOME,
                initialRouteName: 'Report',
                screens: {
                    // Report route
                    Report: ROUTES.REPORT_WITH_ID,
                },
            },
            Report_With_Sequence_Number: {
                // path: ROUTES.HOME,
                screens: {
                    Report_With_Sequence_Number_Root: ROUTES.REPORT_WITH_ID_AND_SEQUENCE_NUMBER,
                },
            },

            // Public Routes
            SignIn: ROUTES.SIGNIN,
            SetPassword: ROUTES.SET_PASSWORD_WITH_VALIDATE_CODE,
            ValidateLogin: ROUTES.VALIDATE_LOGIN_WITH_VALIDATE_CODE,

            // Modal Screens
            Settings: {
                screens: {
                    Settings_Root: {
                        path: ROUTES.SETTINGS,
                    },
                    Settings_Preferences: {
                        path: ROUTES.SETTINGS_PREFERENCES,
                        exact: true,
                    },
                    Settings_Password: {
                        path: ROUTES.SETTINGS_PASSWORD,
                        exact: true,
                    },
                    Settings_Payments: {
                        path: ROUTES.SETTINGS_PAYMENTS,
                        exact: true,
                    },
                    Settings_Profile: {
                        path: ROUTES.SETTINGS_PROFILE,
                        exact: true,
                    },
                    Settings_Add_Seconday_Login: {
                        path: ROUTES.SETTINGS_ADD_LOGIN,
                    },
                },
            },
            NewGroup: {
                screens: {
                    NewGroup_Root: ROUTES.NEW_GROUP,
                },
            },
            NewChat: {
                screens: {
                    NewChat_Root: ROUTES.NEW_CHAT,
                },
            },
            Search: {
                screens: {
                    Search_Root: ROUTES.SEARCH,
                },
            },
            Details: {
                screens: {
                    Details_Root: ROUTES.DETAILS_WITH_LOGIN,
                },
            },
            IOU_Request: {
                screens: {
                    IOU_Request_Root: ROUTES.IOU_REQUEST,
                },
            },
            IOU_Bill: {
                screens: {
                    IOU_Bill_Root: ROUTES.IOU_BILL,
                },
            },
        },
    },
};

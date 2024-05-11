'use strict';
/*
|--------------------------------------------------------------------------
| Application Primary Pakages Installation
|--------------------------------------------------------------------------
|
*/

const GA4AnalyticsReport = require('./main_bundle.min');

/****************************************************
# AnalyticsReport            
# Page/Class name : AnalyticsReport
# Author : Dilip Kumar Shaw
# Created Date : 10/04/2024
# Functionality : createUrl, createToken, refreshToken, generateReport
# Purpose : For call all google ga4 api's
*****************************************************/


const AnalyticsReport = {

    //Constructor he class
    _callConstructor: (options = {}) => {
        return new GA4AnalyticsReport(options.client_id, options.client_secret);

    },

    /****************************************************      
    # Function name : createUrl
    # Author : Dilip Kumar Shaw
    # Created Date : 10/04/2024            
    # Purpose :  This function create auth url for generate code
    # Params : [redirect_uri, scope]  
    *****************************************************/

    createUrl: (options = {}) => {
        const GA4 = AnalyticsReport._callConstructor(options);
        return GA4.createAuthUrl(options.redirect_uri, options.scope == undefined ? '' : options.scope);
    },


    /****************************************************      
    # Function name : createToken
    # Author : Dilip Kumar Shaw
    # Created Date : 10/04/2024            
    # Purpose :  This function return access_token, expires_in, refresh_token, scope, token_type
    # Params : [code, redirect_uri]  
    *****************************************************/

    createToken: async (options = {}) => {
        const GA4 = AnalyticsReport._callConstructor(options);

        return new Promise(async function (myResolve, myReject) {
            let response = await GA4.createNewToken(options);
            myResolve(response);
        });
    },

    /****************************************************      
    # Function name : refreshOldToken
    # Author : Dilip Kumar Shaw
    # Created Date : 10/04/2024            
    # Purpose :  This function increase time of access token and return access_token, expires_in, token_type
    # Params : [refresh_token]  
    *****************************************************/

    refreshToken: async (options = {}) => {
        const GA4 = AnalyticsReport._callConstructor(options);

        return new Promise(async function (myResolve, myReject) {
            let response = await GA4.refreshOldToken(options.refresh_token);
            myResolve(response);
        });
    },
    /****************************************************      
    # Function name : generateReport
    # Author : Dilip Kumar Shaw
    # Created Date : 10/04/2024            
    # Purpose :  This function return ga4 analytics report
    # Params : [property_id, bearer_access_token]  
    *****************************************************/

    generateReport: async (options = {}) => {
        const GA4 = AnalyticsReport._callConstructor(options);
        return new Promise(async function (myResolve, myReject) {
            let response = await GA4.generateGA4Report(options);
            myResolve(response);
        });
    }
};

module.exports = {
    createUrl: AnalyticsReport.createUrl,
    createToken: AnalyticsReport.createToken,
    refreshToken: AnalyticsReport.refreshToken,
    generateReport: AnalyticsReport.generateReport,
};
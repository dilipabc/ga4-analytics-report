# ga4-analytics-report

GA4 Analytics Report


## Install

```
$ npm install --save ga4-analytics-report
```

## Features

- Generate Auth URL
- Generate Access Token
- Refresh The Access Token Time
- Generate The App Analytics Report


## Usage

   This function generates an authentication URL for Google. Simply paste this URL into your browser, authenticate with Google, and upon successful authentication, retrieve the 'code' from the return URL.


```js

let client_id = "";
let client_secret = '';
let redirect_uri = "";

let options = {
    redirect_uri : redirect_uri, //
    scope : '',
    client_id : client_id,
    client_secret : client_secret
}

let returnURL = ga4.createUrl(options);

console.log(returnURL);

```

## Usage

   This function simplifies authentication with Google, providing essential access tokens and associated details. It returns an access token, along with its expiration time, refresh token, scope, and token type. The access token grants temporary access to Google APIs, while the refresh token enables seamless token renewal. Scope defines permitted actions, and token type specifies the token format. With these parameters, applications can securely interact with Google services, ensuring continuous access and adhering to user permissions.


```js

let options = {
    redirect_uri: '',
    code: '',
    client_id: '',
    client_secret: ''
}

ga4.createToken(options).then((response)=>{
    console.log('response',response.data);

}).catch((error)=>{
    throw Error(error);
});

```


## Usage

This function extends the validity period of an access token and returns the updated token along with its remaining expiration time and type. By prolonging the access token's lifespan, it ensures continued access to protected resources. The function's output includes the refreshed access token, the duration until expiration, and the token type, facilitating seamless interaction with OAuth 2.0-protected APIs while maintaining security and access control.


```js

let options = {   
    refresh_token: '1//0gnjijzhXRFW8CgYIARAAGBASNwF-L9IrlZ0IVZ55k3iZ72HTrlK_1B89rMLZpL42mYoQVdaaTiHD8pi8FbLWBIF1YraIh8nbuAg',
    client_id: client_id,
    client_secret: client_secret
}

ga4.refreshToken(options).then((response)=>{
    console.log('response',response.data);

}).catch((error)=>{
    throw Error(error);
});

```

## Usage

This function retrieves Google Analytics 4 (GA4) reports, offering valuable insights into website or app performance. By querying GA4 data, it provides comprehensive analytics reports, including metrics and dimensions tailored to specific business needs. Leveraging GA4's advanced tracking capabilities, the function furnishes essential data on user behavior, conversion rates, and engagement metrics. With its streamlined approach, businesses can gain actionable insights to optimize their digital strategies, enhance user experiences, and drive growth.


```js

let dimensions = [
    {
        "name": "city"
    },
    {
        "name": "country"
    },
    {
        "name": "date"
    },
    {
        "name": "region"
    },
    {
        "name": "streamName"
    }
];

let metrics = [
    {
        "name": "totalUsers"
    }
];

let dateRanges = [
    {
        "startDate": "2024-01-01",
        "endDate": "2024-05-10"
    }
];

let dimensionFilter = {
    "filter": {
        "stringFilter": {
            "matchType": "EXACT",
            "caseSensitive": false,
            "value": 'Kolkata'
        },
        "fieldName": "city"
    }
}

let orderBys = [
    {
        "dimension": {
            "orderType": "ALPHANUMERIC",
            "dimensionName": "date"
        },
        "desc": true
    }
]

let options = {
    bearer_access_token: 'ya29.a0AXooCgu39YW8r9DL2kOACnInAZIMoM9tbChG9RgWKrwbe0XKumfrPc2JYIDDbTyIc85gGnMmJH_KVY_r3MaOv4eWMCx0hD_ynWHfCr2jVAuGLLFnjl65kJIiMfv_UDxD43RwJF0VWxxQ2zpVBGJP12MJRqGm8_d1eIdCaCgYKAUUSARESFQHGX2MiJ0D4gRHLyBct24uEqhtk8w0171',
    client_id: client_id,
    client_secret: client_secret,
    property_id: property_id,
    dimensions: dimensions,
    dateRanges : dateRanges,
    dimensionFilter : dimensionFilter,
    orderBys : orderBys
}

ga4.generateReport(options).then((response) => {
    console.log('response', response.data);

}).catch((error) => {
    throw Error(error);
});

```

## Certainly! Here are the step-by-step instructions to obtain the client ID, client secret, and property ID from the Google Console:


    - Navigate to Google Analytics Console: Go to the Google Analytics Console at https://analytics.google.com/ and sign in with your Google account.

    - Select or Create a Property: If you already have a property set up, select it from the list. If not, create a new property by clicking on the "Admin" tab in the bottom left corner, then click on "Create Property" and follow the prompts to set it up.

    - Navigate to Property Settings: Once you've selected or created a property, navigate to its settings. You can do this by clicking on the "Admin" tab at the bottom left corner, then select the appropriate property under the "Property" column.

    - Create a New OAuth Client ID: Under the property settings, navigate to the "Data Streams" section. If you're setting up a web data stream, click on "Web", otherwise select the appropriate data stream type.

    - Set up OAuth Consent Screen: If you haven't set up the OAuth consent screen for your project, you'll be prompted to do so. Follow the prompts to configure the consent screen with the necessary information.

    - Configure OAuth Client ID: After setting up the consent screen, you'll be prompted to create an OAuth client ID. Click on "Create client ID" and select the application type (e.g., Web Application, Installed Application, etc.).

    - Enter Authorized Redirect URIs: Depending on the application type you selected, you may need to provide authorized redirect URIs. These are the URLs where users will be redirected after granting consent.

    - Get Client ID and Client Secret: Once you've configured the OAuth client ID, Google will generate a client ID and client secret for your application. These credentials are essential for authenticating your application with Google Analytics.

    - Retrieve Property ID: The property ID is usually displayed in the Google Analytics interface. Navigate back to your property settings, and you should find the property ID listed there. It's typically in the format "UA-XXXXXXXXX-X".

    - Use Credentials in Your Application: Finally, copy the generated client ID, client secret, and property ID into your application's code or configuration file.

Remember to keep your client secret secure and never expose it in client-side code or public repositories. Additionally, ensure that your application has the necessary permissions to access the Google Analytics property data.


## license
Matrix Media Solutions Pvt. Ltd.

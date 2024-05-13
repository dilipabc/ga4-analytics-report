# ga4-analytics-report

The GA4 Analytics Report delivers concise insights into website or app performance through Google Analytics 4 (GA4). This comprehensive report offers key metrics and dimensions tailored to specific business objectives, empowering users with actionable data on user behavior, conversions, and engagement. Leveraging GA4's advanced tracking capabilities, businesses can optimize digital strategies, enhance user experiences, and drive growth. With its streamlined approach, the GA4 Analytics Report simplifies data interpretation, enabling informed decision-making and strategic planning.


## Install

```
$ npm install --save ga4-analytics-report
```

## Features

- Generate Auth URL
- Generate Access Token
- Refresh The Access Token Time
- Generate The App Analytics Report


## Create Url

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

## Create Token

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


## Refresh Token

This function extends the validity period of an access token and returns the updated token along with its remaining expiration time and type. By prolonging the access token's lifespan, it ensures continued access to protected resources. The function's output includes the refreshed access token, the duration until expiration, and the token type, facilitating seamless interaction with OAuth 2.0-protected APIs while maintaining security and access control.


```js

let options = {   
    refresh_token: '',
    client_id: client_id,
    client_secret: client_secret
}

ga4.refreshToken(options).then((response)=>{
    console.log('response',response.data);

}).catch((error)=>{
    throw Error(error);
});

```

## Generate Report

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
    bearer_access_token: '',
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

## 🔗 API Dimensions & Metrics

These are just a few examples of dimensions and metrics available in GA4. You can explore the full list of dimensions and metrics in the 
[[Google Analytics documentation]](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema). Additionally, you can customize your queries based on your specific reporting needs.


## 🔗 Configration Require

To access analytics reports, enabling the Google Analytics API and configuring Google Firebase Analytics is essential. By activating the Google Analytics API, users unlock access to data retrieval functionalities, enabling seamless extraction of insights. Concurrently, configuring Google Firebase Analytics ensures comprehensive tracking of user interactions across web and app platforms, enriching the analytics dataset. Together, these steps facilitate robust data collection and analysis, empowering businesses to derive actionable insights for informed decision-making and strategic planning.


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

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/posts/dilip-shaw-2740769_dilipabcnodeframe1-activity-6576729679556853760-JiaP)


## 🚀 About Me
I'm a full stack developer. Experienced developer with over 20 years of expertise in crafting scalable web applications. Proficient in frontend technologies such as Angular and React, alongside extensive experience in WordPress, Drupal, and backend frameworks like Node.js. With a proven track record of delivering high-quality solutions to meet client needs and drive business objectives, I bring a versatile skill set and a commitment to excellence to every project.


## Feedback

If you have any feedback, please reach out to us at dilipabc@gmail.com
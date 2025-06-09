import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "<YOUR_CLIENT_ID>", // Replace with your Azure AD app's client ID
    authority: "https://login.microsoftonline.com/<YOUR_TENANT_ID>", // Replace with your tenant ID
    redirectUri: "http://localhost:3000", // Replace with your app's redirect URI
  },
  cache: {
    cacheLocation: "localStorage", // This can be "localStorage" or "sessionStorage"
    storeAuthStateInCookie: false, // Set to true for IE11 or Edge
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Replace with the scopes your app needs
};
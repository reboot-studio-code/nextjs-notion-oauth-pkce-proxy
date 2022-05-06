## Notion OAuth PKCE Proxy

This is a Notion OAuth PKCE proxy build with [Next.js](https://nextjs.org).

We build this because when we were building the [Hypersonic Raycast App](https://hypersonic.run) at the studio the notion api wasn't working with PKCE so the best solution was to build this proxy.

The proxy server has been tested with our own app but it may need some tweaks to adapt to your use case so use it as an starting point.

## Configuration

Create an .env.local file using the enviroment varibales from the .env.template and fill the values with your own.

Example using [Raycast](https://www.raycast.com) as the client:

```
AUTH_TOKEN=Notion Base64 Basic Auth Token
CLIENT_REDIRECT_URL=https://www.raycast.com/redirect?packageName=Extension
PROXY_REDIRECT_URL=https://your-proxy-domain/api/code
NOTION_AUTHORIZE_URL=https://api.notion.com/v1/oauth/authorize
NOTION_TOKEN_URL=https://api.notion.com/v1/oauth/token
```

## Run locally

To run the proxy locally start the project with the following commands:

```bash
npm run dev
# or
yarn dev
```

After that you may want to expose your localhost using [Ngrok](https://ngrok.com) or a similar service to test your integration.

## Deploy on Vercel

The easiest way to deploy the proxy is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

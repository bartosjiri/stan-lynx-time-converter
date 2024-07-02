<p align="center">
  <a href="https://stan-lynx-time-converter.vercel.app" target="_blank"><img height="256" src="static/assets/images/header-logo.png" alt="Stan Lynx Time Converter logo" /></a>
</p>
<h1 align="center">Stan Lynx Time Converter</h1>
<hr/>

An approximate conversion from Stan Lynx time to actual time, utilizing historical data.
The calculation relies on the variances between the announcement and promised delivery times (in Stan Lynx time) and the corresponding actual delivery times.

## How to contribute

You can contribute data to improve approximate calculations by opening a PR to add or correct events in the `/config/events.ts` file:

- `name`: Title of Stan's announcement.
- `announcedAt`: Date and time of Stan's announcement.
- `announcementReferences`: Links referencing the announcement.
- `promisedAt`: Date and time of the announced event.
- `deliveredAt`: Date and time of the actual event delivery _(may be omitted if the event has not yet occurred, but tracking is desired)_.
- `deliveryReferences`: Links referencing the actual event delivery.

For Stan's announcement, ensure Paris local time is used unless otherwise specified. Times in the config file are in UTC+0.

Improvements and fixes to the application are also welcome.

---

## Requirements

- [Node.js](https://nodejs.org/en/) >=18

## Development

1. Install project dependencies:
   ```
   pnpm i
   ```
2. Run the application in the development mode:
   ```
   pnpm run dev
   ```

## Deployment

#### Using providers with SvelteKit support

1. Deploy the application using the provider of your preference with SvelteKit support.
2. Provide required environment variables based on the `.env.example` file.

#### Self-hosting

1. Set up required environment variables based on the `.env.example` file.
2. Follow the SvelteKit's [node server deployment documentation](https://kit.svelte.dev/docs/adapter-node).

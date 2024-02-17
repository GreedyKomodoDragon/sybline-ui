<p align="center">
<img src="./public/logo_full.svg" width="450"/>
</p>

# Sybline Management UI

A management UI for the sybline broker. It utilises the REST API in the sybline cluster to perform actions.

It is built using:

* SolidJS
* Tailwindcss
* Vite


## Table of Contents
- [Current State](##Current-State)
- [Development](#Development)
- [Contributing](#contributing)
- [License](#license)

## Current State

This is a management UI for the Sybline Message broker. It is very much in an pre-alpha state, is not ready for building and using in production.

This is because the UI is missing many features and the Sybline Message broker has not yet published its rest API/is missing many of the features in the rest API that are currently in the GRPC.

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

### URL Variables

This can be any of the clusters urls. You will also need to load into the `public/config/config.json` a file that looks like the following:

```js
{
    "urls": [
        "http://127.0.0.1:7878",
        "http://127.0.0.1:7879",
        "http://127.0.0.1:7880"
    ]
}
```

Which is a list of all the URLs for the sybline cluster.

# Contributing

The Sybline Management UI (or any sybline related projects) are open to contributions whether these are new features or bug-fixes.

Please note, if the feature does not align with the original goal of Sybline it will sadly not be accepted; we don't want the scope of Sybline to become too unmaintainable.

If you are interested in the project but have no/little technical experience, please have a look at the [documentation repo](https://github.com/GreedyKomodoDragon/sybline-docs), it always needs changes or translations!

# License

Sybline has been released under GNU Affero General Public License v3.0. 
* This is a copyleft License
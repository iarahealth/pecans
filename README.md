# Pecans

Pecans is a simple (and smart) application to serve desktop-application releases. It was forked from Nuts. I have a few goals

- ES6 update
- Update Dependencies
- New Features
  - Download from assets backend CDNs with private links instead of proxying

![Schema](./docs/sequence.png)

It uses GitHub as a backend to store assets, and it can easily be deployed to Heroku as a stateless service. It supports GitHub private repositories (useful to store releases of a closed-source application available on GitHub).

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### Features

- Store assets on GitHub releases
- Proxy releases from private repositories to your users
- Simple but powerful download urls
  - `/download/latest`
  - `/download/latest/:os`
  - `/download/:version`
  - `/download/:version/:os`
  - `/download/channel/:channel`
  - `/download/channel/:channel/:os`
- Support pre-release channels (`beta`, `alpha`, ...)
- Auto-updates with [Squirrel](https://github.com/Squirrel)
  - For Mac using `/update?version=<x.x.x>&platform=osx`
  - For Windows using Squirrel.Windows and Nugets packages
- Private API
- Use it as a middleware: add custom analytics, authentication
- Serve the perfect type of assets: `.zip` for Squirrel.Mac, `.nupkg` for Squirrel.Windows, `.dmg` for Mac users, ...
- Release notes endpoint
  - `/notes/:version`
- Up-to-date releases (GitHub webhooks)
- Atom/RSS feeds for versions/channels

#### Deploy it / Start it

[Follow our guide to deploy Pecans](https://pecans.darrelopry.com/v/main/docs/deploy).

#### Auto-updater / Squirrel

This server provides an endpoint for [Squirrel auto-updater](https://github.com/atom/electron/blob/master/docs/api/auto-updater.md), it supports both [OS X](https://pecans.darrelopry.com/v/main/docs/update-osx) and [Windows](https://pecans.darrelopry.com/v/main/docs/update-windows).

#### Documentation

[Check out the documentation](https://pecans.darrelopry.com/v/main/docs) for more details.

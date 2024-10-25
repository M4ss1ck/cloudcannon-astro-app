# Sendit

Sendit is a polished, marketing website template for Astro. Browse through a [live demo](https://top-quail.cloudvent.net/).

![Sendit template screenshot](public/images/_screenshot.png)

[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/sendit-astro-template)

## Features

- Pre-built pages
- Pre-styled components
- Blog with pagination and category pages
- Configurable navigation and footer
- Multiple hero options
- Configurable theme colors
- Optimised for editing in [CloudCannon](https://cloudcannon.com/)
- Live, visual editing powered by [Bookshop](https://github.com/CloudCannon/bookshop)

## Setup

1. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/)
   or Astro locally).

## Develop

Sendit is built with [Astro](https://astro.build/).

```bash
$ npm install
$ npm run dev
```

## Editing

Sendit is set up for adding, updating and removing pages, components, posts, portfolio items, company details and footer elements in [CloudCannon](https://app.cloudcannon.com/).

### Components

- Add the new react component in the `src/components` directory inside its own parent directory or using an existing one. E.g `src/components/test/test.jsx`. More information on [Clodcannon Documentation](https://cloudcannon.com/documentation/guides/bookshop-astro-guide/component-templating/)
- Create a [Bookshop specification file](https://cloudcannon.com/documentation/guides/bookshop-astro-guide/using-structures/#the-bookshop-specification-file) next to the component file. It must share the same name in the form component-name.bookshop.yml. E.g `src/components/test/test.bookshop.yml`
- The main sections here are `spec` and `bluprint`. The `spec` section names this component and tells CloudCannon where you can place this component on your site and the `blueprint` section defines the data your component needs and provides the default values when a new component is created.

### Posts

- Add, update or remove a post in the _Posts_ collection.
- The **Staff Author** field links to members in the **Staff** collection.
- Change the defaults when new posts are created in `content/posts/_defaults.md`.

### Company details

- Reused around the site to save multiple editing locations.
- Set in the _Data_ / _Company_ section.

### Nav/footer details

- Reused around the site to save multiple editing locations.
- Set in the _Data_ section with respective names

### Theme colors

- Theme colors can be set in _Data_ / _Theme_
- The main colors are set and variants of them are computed
- The colors will update on the next build

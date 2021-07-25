# src
Source code of project will go here

## Naming

<img height="80" src="https://media.tenor.com/images/3b91159bcf42b1883cc907d83f8b34e5/tenor.gif">

When you think how to name things, here is one main rule: globally - goes first.

<details>
  <summary>Why?</summary>
  This system is quite convenient, although at first glance it seems illogical. But thanks to this approach, we can only remember the name of a class or component to quickly find it (because most development environments show hints when you start entering the file address). So realizing that I need to import a page, I'll start typing <code>page.</code> and the IDE will already show me a list of pages available for import.
</details>

### Folders
Pattern: *globaly*-*secondary*; lowercase

For example, you need a folder for a page ```404```, so we need to name it:

```page-404```

Where: ```page``` - is a **globaly**, ```404``` - is a **secondary**

### Files
Pattern: *globaly*.*secondary*.**extention**; lowercase.camelcase

For files we also use rule "globally - goes first". Let`s continue with our ```404``` page example.
in folder ```page-404``` we will create an main file for this page. So according to pattern:

```page.404.ts```

Where: ```page``` - is a **globaly**, ```404``` - is a **secondary**, ```ts``` - is a **file extention**.







## Project structure
```
src
├───page
│   └───page-landing
│       ├───components
│       └───styles
├───public
│   └───media
│       ├───fonts
│       ├───images
│       └───js
└───shared
    ├───shared-components
    └───shared-styles
```

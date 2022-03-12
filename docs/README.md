---
sidebar: auto
next: /config/cop
---

# Guide


## Intro

> Python 

![学习Python](./assets/python-logo-master-v3-TM.png)

Learning Python.

We try to implement all the common and necessary blog features in the plugin.



## Getting Started from scratch

In this guide, you'll learn how to add default blog theme to a new project manually.

### Installation

```bash
mkdir blog && cd blog # Create an empty directory and go into it

yarn add vuepress @vuepress/theme-blog -D # Install the dependencies
# OR npm install vuepress @vuepress/theme-blog -D
```
### Folder structure

Here's the recommended project structure:

**Required**:

- `blog/.vuepress/config.js`: Entry file of configuration, can also be `yml` or `toml`.
- `blog/_posts`: Stores your post content.

**Optional**:

- `blog/.vuepress/components`: The Vue components .


### Using @vuepress/theme-blog

You must add `@vuepress/theme-blog` as a theme in `.vuepress/config.js`.

```js
// .vuepress/config.js
module.exports = {
  title: 'VuePress Blog Example', // Title for the site. This will be displayed in the navbar.
}
```


From now on, you can run `yarn dev` or `npm run dev` and head `localhost:8080` to see your blog!

### Generating content

The `_posts` folder is where your blog posts live. You can simply write blog posts in Markdown.

All blog post files can begin with front matter. Only `title` is required, but we recommend you define all frontmatter variables as below. They'll be used to set the corresponding layout. Check out [frontmatter](config/front-matter) for more details.


### Blog tags

By default, Navigate to `/tag/`, you'll see the tag entry page.
You can set you own tags in front matter, and they'll automatically be classified:


### Summary

By default, summary will be extracted from source markdowns. If you need to override it, we present the following two approaches:

1. [Writing the summary manually in frontmatter](./front-matter.md#summary)



## Quick Start

Step 1: Scaffolding out a VuePress blog
```bash
yarn create vuepress [blogName]

cd [blogName] && yarn
```

Step 2: Develop & Build


By default, VuePress dev server is listening at `http://localhost:8080/`, whereas the built files will be in `.vuepress/dist`.

:::warning

However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.
:::

## Final

Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/wangsvue.svg)](https://badge.fury.io/js/wangsvue)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![wangs Discussions](https://img.shields.io/github/discussions-search?query=org%3Awangsfaces&logo=github&label=wangs%20Discussions&link=https%3A%2F%2Fgithub.com%2Forgs%2Fwangsfaces%2Fdiscussions)](https://github.com/orgs/wangsfaces/discussions)

[![wangsVue Hero](https://www.wangsfaces.org/static/social/wangsvue-preview.jpg)](https://wangsvue.org/)

# wangsVue

wangsVue is a rich set of open source UI Components for Vue. See [wangsVue homepage](https://wangsvue.org/) for live showcase and documentation.

## Download

wangsVue is available at [npm](https://www.npmjs.com/package/wangsvue).

```bash
# Using npm
npm install wangsvue

# Using yarn
yarn add wangsvue

# Using pnpm
pnpm add wangsvue
```

## Plugin

wangsVue plugin is required to be installed as an application plugin to set up the default [configuration](https://wangsvue.org/configuration). The plugin is lightweight, only sets up the configuration object without affecting your application. wangsVue has two styling modes; Styled and Unstyled. If you are just getting started, we suggest to using the styled mode.

```javascript
import { createApp } from 'vue';
import wangsVue from 'wangsvue/config';
const app = createApp(App);

app.use(wangsVue);
```

## Theming

wangsVue has two theming has modes; styled or unstyled.

**Styled Mode**

Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color.

```javascript
import { createApp } from 'vue';
import wangsVueStyled from 'wangsvue/config';
const app = createApp(App);

app.use(wangsVueStyled);
```

**Unstyled Mode**

In unstyled mode, the components do not include any CSS so you'd need to style the components on your end. If you are using Tailwind CSS, visit the [Tailwind Presets](https://tailwind.wangsvue.org) project to get you started with styling the components with Tailwind utility classes.

```javascript
import { createApp } from 'vue';
import wangsVueUnstyled from 'wangsvue/config';
const app = createApp(App);

app.use(wangsVueUnstyled);
```

## Usage

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
import Button from 'wangsvue/button';

const app = createApp(App);
app.component('Button', Button);
```

## Prop Cases

Component prop names are described as camel case throughout the documentation however kebab-case is also fully supported. Events on the other hand should always be kebab-case.

```vue
<Dialog :showHeader="false"></Dialog>

<!-- can be written as -->

<Dialog :show-header="false"></Dialog>
```

## Nuxt Integration

The [nuxt-wangsvue](https://www.npmjs.com/package/nuxt-wangsvue) package is the official module by wangsTek. See the nuxt documentation for details. [information](https://wangsvue.org/nuxt)

## Example

We've created various samples for the popular options in the Vue ecosystem. Visit the [wangsvue-examples](https://github.com/wangsfaces/wangsvue-examples) repository for the samples.

## Contributors

<a href="https://github.com/wangsfaces/wangsvue/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wangsfaces/wangsvue" />
</a>

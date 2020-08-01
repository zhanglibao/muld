# Icon

### Install

```js
import { Icon } from '@trillion/muld';

```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<Icon name="SmileOutlined" />
<Icon name="https://avatar.chengfayun.com.cn/chengfayun-avatar/6ce849b003c18744b54d1a9913db75e9.png" />
```

### Show Badge

Use `dot` prop, a small red dot will be displayed in the upper right corner of the icon.

Use `badge` prop, the badge will be displayed in the upper right corner of the icon.

```html
<Icon name="SmileOutlined" dot />
<Icon name="SmileOutlined" badge="9" />
<Icon name="SmileOutlined" badge="99+" />
```

### Icon Color

Use `color` prop to set icon color

```html
<Icon name="SmileOutlined" color="#1989fa" />
<Icon name="SmileOutlined" color="#07c160" />
```

### Icon Size

Use `size` prop to set icon size

```html
<Icon name="SmileOutlined" size="40" /> <Icon name="SmileOutlined" size="3rem" />
```


## API

### Props

| Attribute      | Description             | Type               | Default    |
| -------------- | ----------------------- | ------------------ | ---------- |
| name           | Icon name or URL        | _string_           | `''`       |
| dot            | Whether to show red dot | _boolean_          | `false`    |
| badge          | Content of the badge    | _number \| string_ | `''`       |
| color          | Icon color              | _string_           | `inherit`  |
| size           | Icon size               | _number \| string_ | `inherit`  |
| class-prefix   | ClassName prefix        | _string_           | `mul-icon` |
| tag            | HTML Tag                | _string_           | `i`        |

### Events

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| click | Triggered when click icon | _event: Event_ |

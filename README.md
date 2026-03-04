# (React) Icons

[Google's Material UI icons](https://mui.com/material-ui/material-icons/) re-packaged as a set of **React components** without being dependent on [Emotion](https://emotion.sh/).

## Changelog
[Please read here](CHANGELOG.md)

## Installation

```sh
npm install --save @digitalservicebund/icons
```

## Configure paths in `tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@digitalservicebund/icons/*": [
        "node_modules/@digitalservicebund/icons/*"
      ]
    }
  }
}
```

## Usage

```jsx
import WarningAmberIcon from "@digitalservicebund/icons/WarningAmber";

<WarningAmberIcon />

<WarningAmberIcon className="w-48 h-48" />
```

### Don't

Don't import from `@digitalservicebund/icons/index` to prevent all icons from being bundled in dev mode. You might want to add this rule to eslint:

```js
export default defineConfig(
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@digitalservicebund/icons/index",
              message:
                "Import from '@digitalservicebund/icons' (package root) to prevent all icons from being bundled in dev mode.",
            },
          ],
          patterns: ["@digitalservicebund/icons/index.*"],
        },
      ],
      quotes: ["error", "double", { avoidEscape: true }],
    },
  },
);
```

[source](https://github.com/digitalservicebund/digitalcheck-dito/blob/42e46db920352ef641a2a8392e3e734334addee4/eslint.config.js#L128)

## Accessibility

By default, the icons provided are hidden from screen readers (using `aria-hidden="true"`). It is assumed that icons are used purely for decorative purposes. That they only ever accompany a text that is meaningful even without an icon.

If this is not the case and the icon has sematic meaning, you have to take extra steps. Sara Soueidan shows some techniques regarding [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/).

Just in case you make an icon visible to screen readers, icons also have an appropriate ARIA role (`role="graphics-symbol"`).

# Icons

[Google's Material UI icons](https://mui.com/material-ui/material-icons/) re-packaged as a set of **React components** without being dependent on [Emotion](https://emotion.sh/).

## Changelog
[Please read here](CHANGELOG.md)

## Installation

```sh
npm install --save @digitalservicebund/icons
```

## Usage

```jsx
import WarningAmberIcon from "@digitalservicebund/icons/WarningAmber";

<WarningAmberIcon />

<WarningAmberIcon className="w-48 h-48" />
```

## Accessibility

By default, the icons provided are hidden from screen readers (using `aria-hidden="true"`). It is assumed that icons are used purely for decorative purposes. That they only ever accompany a text that is meaningful even without an icon.

If this is not the case and the icon has sematic meaning, you have to take extra steps. Sara Soueidan shows some techniques regarding [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/).

Just in case you make an icon visible to screen readers, icons also have an appropriate ARIA role (`role="graphics-symbol"`).

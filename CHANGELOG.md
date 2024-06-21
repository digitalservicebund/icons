# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0]

### Changed

- **Breaking:** Use ESM instead of CJS module system

If you get an error during the typecheck

```
error TS2307: Cannot find module ... or its corresponding type declarations.
```

please add this below in the tsconfig

```json
    "paths": {
      "@digitalservicebund/icons/*": ["node_modules/@digitalservicebund/icons/*"]
    }
```

## [1.0.0]

### Added

- Initial release of digitalservice/icons re-packaged as a set of React components without being dependent on [Emotion](https://emotion.sh/).

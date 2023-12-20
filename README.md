# npm package example 

Minimal starting point for creating a DigitalService npm package, which you can release with one manual click or (if applicable) triggered automatically by an event. Requires consistent use of conventional commits!

## Enabler: Conventional commits

> The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

source: [conventionalcommits.org](https://www.conventionalcommits.org/)

Putting in the effort to write machine-readable commits at commit time frees one from creating a changelog and figuring out the next version number at release time. This makes releasing super simple and ensures that it happens often.

## Assumption: Release from `dist` folder

Assumption: you have some kind of build step and you want to release only your build artifact (`dist` folder). Make sure to have a `package.json` in the `dist` folder before releasing. Feel free to adapt if your package is different.

## Good to know: Version in package.json

The `"version"` field in the `package.json` *in the repository* is never updated. It's always `"0.0.0-development"`. The *published* `package.json` though has the correct current version. You never have to set a version string anywhere.

## Good to have: npm package provenance

It links packages to their source and build and increases trust in the supply chain. This is only possible when the `npm release` runs on GitHub Actions, not when you release on your local machine.

Make sure to have the following configuration in your `package.json` to enable npm package provenance.

```json
"publishConfig": {
    "provenance": true
},
```

## Mandatory: Commit message linting

Magically simple releasing only works with correct conventional commits. You must always use them! That's why linting is basically mandatory. This example uses `commitlint` with `lefthook` as one possible way.

## Checklist when not using this template repository

In case you just want to cherry pick for your existing package.

* `package.json`: set `"version"` to `"0.0.0-development"` (optional, but recommended)
* `package.json`: add `"publishConfig": { "provenance": true }` (optional, but recommended)
* repository settings: add a `NPM_TOKEN` repository secret (repository -> settings -> secrets and variables -> actions -> new repository secret). Find the value in 1Password ("NPM"), look for "Publish Token," its value starts with "npm_"
* copy `.github/workflows/release.yml` and adapt to your needs. Make sure to not remove permissions and to keep the configuration of the `setup-node` action.
* `npm install --save-dev semantic-release`

### For linting

* `npm install --save-dev @commitlint/cli @commitlint/config-conventional` + configuration in `commitlint.config.js`
* `npm install --save-dev lefthook` + configuration in `lefthook.yml`


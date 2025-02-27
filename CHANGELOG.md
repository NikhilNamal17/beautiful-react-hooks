# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2019-12-18

### Added

- Create package.json
- Setup .gitignore
- Add a CHANGELOG.md
- Add a Readme.md and a Contributing.md
- Add Styleguidist
- Add ESLint
- Add Stylelint
- Tests
- Build System
- useCallbackRef hook & tests
- useDidMount hook & tests
- useWillUnmount hook & tests
- useLifecycle hook & tests
- useWindowResize hook & tests
- Auto-generating documentation script

## [0.2.0] - 2019-12-20

### Added

- useDebouncedFn hook & tests

## [0.3.0] - 2019-12-21

### Added

- useMouseEvents hook & tests
- useMouseState hook & tests
- useMouse hook & tests

## [0.3.1] - 2019-12-23

### Fixed

- Adding babel-plugin-istanbul to solve [this issue with istanbul/nyc](https://github.com/istanbuljs/nyc/issues/706)

## [0.4.0] - 2019-12-23

### Added

- Adding playground build as a gitpages website
- Adding better documentation

## [0.5.0] - 2019-12-24

### Added

- useInterval hook & tests
- useTimeout hook & tests

## [0.5.1] - 2019-12-24

### Fixed

- Build workflow performs tests twice

## [0.6.0] - 2019-12-24

### Added

- useThrottledFn hook & tests
- debounce and throttle utilities

## [0.7.0] - 2019-12-24

### Added

- useWindowScroll hook & tests

## [0.8.0] - 2019-12-28

### Added

- useGlobalEvent hook & tests

## [0.8.1] - 2019-12-28

### Fixed

- Few documentation typos

## [0.8.2] - 2019-12-28

### Fixed

- Few documentation typos
- README image

### Added 

- Types support

## [0.8.3] - 2019-12-28

### Fixed

- Few documentation typos

## [0.9.0] - 2019-12-29

### Fixed

- usePreviousValue hook & tests

## [0.9.1] - 2019-12-29

### Fixed

- peerDependencies
- build was missing
- usePreviousValue types were missing

## [0.9.2] - 2019-12-29

### Fixed

- React & ReactDom moved to `devDependencies`

## [0.9.3] - 2019-12-29

### Fixed

- Package name for public usage

## [0.10.0] - 2019-12-30

### Added

- Code of conduct
- Contributing guidelines 
- issue template
- pull request template

## [0.10.1] - 2019-12-30

### Fixed

- correct package.json version
- dependencies update

## [0.11.0] - 2019-12-30

### Added

- Rewriting `useMouseHandler` into `useMouseEvents`

### Fixed

- documentation typos

## [0.11.1] - 2019-12-31

### Fixed

- documentation typos

## [0.12.0] - 2019-12-31

### Added

- useGeolocationEvents hook & tests
- useGeolocationState hook & tests
- useGeolocation hook & tests


## [0.13.0] - 2020-01-02

### Added

- useMediaQuery hook & tests
- change the order of the listed hooks into the Readme.md file

### Fixed 

- `useOnMount` renamed to `useDidMount`


## [0.13.1] - 2020-01-02

### Fixed

- Usage example image

## [0.13.2] - 2020-01-02

### Fixed

- improved `useCallbackRef` documentation
- changed lib logo

## [0.13.3] - 2020-01-05

### Fixed

- removed wrong `useCallbackRef` dependencies
- dependency check on other event related hooks

## [0.13.4] - 2020-01-06

### Fixed

- Switching CI to Travis

## [0.13.5] - 2020-01-06

### Fixed

- useTimeout refactory 

## [0.13.6] - 2020-01-07

### Fixed

- few hooks refactory
- Improved documentation by a better use of Styleguidist
- Improved types

## [0.13.7] - 2020-01-07

### Fixed

- `usePrev` renamed to `usePreviousValue`


## [0.13.8] - 2020-01-09

### Fixed

- Fix on `usePreviousValue` type

## [0.13.9] - 2020-01-09

### Fixed

- Fixing CI

## [0.14.0] - 2020-01-10

### Added

- useValueHistory hook & tests

## [0.15.0] - 2020-01-10

### Added

- useOnlineState hook

## [0.16.0] - 2020-01-10

### Added

- Repository ownership changed from `antonioru` to `beautifulinteractions`

## [0.17.0] - 2020-01-10

### Added

- useViewportSpy hook & tests
- Improved documentation

## [0.17.1] - 2020-01-10

### Fixed

- types reference into package.json

## [0.17.2] - 2020-01-12

### Fixed

- Fixed license in package.json

## [0.18.0] - 2020-01-13

### Added

- useDragEvents hook & tests
- useDrag hook

### Fixed

- event handlers uses the right parameters and avoid using (...args)
- `useCallbackRef` has been reverted to an internal utility

## [0.18.1] - 2020-01-14

### Fixed

- Build removed from the source package

## [0.18.2] - 2020-01-20

### Fixed

- useOnlineState returns true when the device does not support the `online/offline` state assuming the app is already 
online
- Improved test

## [0.19.0] - 2020-01-21

### Added

- useConditionalTimeout hook & tests

### Fixed

- adding react and react-dom as dev-dependencies

## [0.19.1] - 2020-01-21

### Fixed

- adding types for useConditionalTimeout

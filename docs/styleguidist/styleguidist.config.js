const path = require('path');
const theme = require('./styleguidist.theme');

module.exports = {
  title: 'Beautiful React Hooks docs',
  /* eslint-disable global-require */
  webpackConfig: require('./webpack.config.js'),
  /* eslint-enable global-require */
  ignore: ['test/**/*.spec.{js,jsx}', 'node_modules', 'docs', 'test'],
  exampleMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  styleguideDir: '../../dist-ghpages',
  ribbon: {
    url: 'https://github.com/beautifulinteractions/beautiful-react-hooks',
    text: 'Fork me on GitHub',
  },
  sections: [
    { name: 'Introduction', content: '../Introduction.md', sectionDepth: 1, },
    { name: 'Installation', content: '../Installation.md', sectionDepth: 1, },
    {
      name: 'Hooks',
      sectionDepth: 2,
      sections: [
        { name: 'useGlobalEvent', content: '../useGlobalEvent.md' },
        { name: 'usePreviousValue', content: '../usePreviousValue.md' },
        { name: 'useValueHistory', content: '../useValueHistory.md' },
        { name: 'useMediaQuery', content: '../useMediaQuery.md' },
        { name: 'useOnlineState', content: '../useOnlineState.md' },
        { name: 'useViewportSpy', content: '../useViewportSpy.md' },
        { name: 'useGeolocation', content: '../useGeolocation.md' },
        { name: 'useGeolocationState', content: '../useGeolocationState.md' },
        { name: 'useGeolocationEvents', content: '../useGeolocationEvents.md' },
        { name: 'useDrag', content: '../useDrag.md' },
        { name: 'useDragEvents', content: '../useDragEvents.md' },
        { name: 'useMouse', content: '../useMouse.md' },
        { name: 'useMouseState', content: '../useMouseState.md' },
        { name: 'useMouseEvents', content: '../useMouseEvents.md' },
        { name: 'useLifecycle', content: '../useLifecycle.md' },
        { name: 'useDidMount', content: '../useDidMount.md' },
        { name: 'useWillUnMount', content: '../useWillUnmount.md' },
        { name: 'useWindowResize', content: '../useWindowResize.md' },
        { name: 'useWindowScroll', content: '../useWindowScroll.md' },
        { name: 'useTimeout', content: '../useTimeout.md' },
        { name: 'useConditionalTimeout', content: '../useConditionalTimeout.md' },
        { name: 'useInterval', content: '../useInterval.md' },
        { name: 'useDebouncedFn', content: '../useDebouncedFn.md' },
        { name: 'useThrottledFn', content: '../useThrottledFn.md' },
      ],
    },
  ],
  require: [path.join(__dirname, 'setup.js'), path.join(__dirname, 'custom.css')],
  // Override Styleguidist components
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'CustomLogo'),
  },
  ...theme,
};

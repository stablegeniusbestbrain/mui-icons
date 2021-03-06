'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M193.46 249.056c3.723-.67 7.59-1.04 11.586-1.04l-3.122-.016h103.823c4.503 0 8.806-.617 12.908-1.754C338.025 240.883 352 223.71 352 202.583V115.36c0-24.833-21.15-43.485-46.29-47.607-15.93-2.624-39.257-3.827-55.088-3.75-15.83.087-30.98 1.405-44.277 3.75C167.143 74.576 160 88.928 160 115.36V144h96v16H128.82c-35.628 0-64.538 42.57-64.813 95.242-.002.253-.007.505-.007.758 0 9.523.94 18.72 2.685 27.404C74.648 323.07 99.45 352 128.82 352H144v-45.935c0-26.827 20.146-51.733 49.46-57.01zm10.196-122.054c-9.592 0-17.384-7.785-17.384-17.403 0-9.665 7.774-17.52 17.384-17.52 9.574 0 17.4 7.854 17.4 17.52 0 9.617-7.81 17.402-17.4 17.402z' }),
        _react2.default.createElement('path', { d: 'M443.95 222.543C434.78 186.02 411.034 160 383.18 160H368v40.672c0 33.915-22.286 58.474-49.49 62.68a53.943 53.943 0 0 1-8.3.647H206.35a51.41 51.41 0 0 0-13.048 1.67C174.18 270.69 160 286.6 160 307.237v87.227c0 24.832 24.977 39.426 49.48 46.55 29.328 8.532 61.268 10.07 96.367 0 23.303-6.66 46.153-20.12 46.153-46.55V368h-96v-16h127.18c25.24 0 47.107-21.365 57.814-52.55C445.474 286.405 448 271.64 448 256c0-11.768-1.433-23.038-4.05-33.457zM307.868 382.82c9.59 0 17.38 7.785 17.38 17.4 0 9.65-7.79 17.52-17.38 17.52-9.577 0-17.4-7.87-17.4-17.52 0-9.63 7.807-17.4 17.4-17.4z' })
      )
    )
  );
};

exports.default = Icon;
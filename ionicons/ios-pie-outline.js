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
        _react2.default.createElement('path', { d: 'M288 80.826c45.293 3.705 87.354 23.024 119.81 55.494C444.043 172.57 464 220.744 464 272.043c0 25.924-5.08 51.042-15.1 74.703-9.68 22.86-23.54 43.384-41.193 61.024-17.654 17.64-38.204 31.48-61.08 41.15-23.673 10.01-48.823 15.082-74.752 15.082-41.193 0-80.47-12.847-113.584-37.146a193.027 193.027 0 0 1-41.632-41.692 191.38 191.38 0 0 1-21.04-36.634l180.258-45.008L288 300.496V81m-16-17v224L74.245 337.376C101.653 420.22 179.84 480 271.875 480 386.75 480 480 386.875 480 272S387 64 272 64z' }),
        _react2.default.createElement('path', { d: 'M240 48.18v214.944l-180.342 45.73C50.54 285.286 48.46 251.88 48.5 239.358v-.071c0-47.31 16.465-93.746 45.173-127.398 16.735-19.62 37.502-34.982 61.72-45.664C180.1 55.33 208.52 49.274 240 48.18M256 32h-5.5C90.5 32 32 148.25 32 239.287c0 0 .25 56.666 18.91 88.29L256 275.574V32z' })
      )
    )
  );
};

exports.default = Icon;
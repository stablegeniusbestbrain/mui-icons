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
        _react2.default.createElement('path', { d: 'M352 432c-26.1 9.1-66.4 15.8-96 15.8-29.6 0-69.9-6.7-96-15.8 0 0-35 22.5-80 32 32.3 0 53.3-9 80-16 23 9 66.7 15.8 96 15.8 29.3 0 74-5.8 96-15.8 26.7 7 47 16 80 16-43.8-9.5-80-32-80-32zm93.5-169L256 176 66.5 263c-6.2 2.9-10.5 9.1-10.5 16.4 0 2.4.5 4.6 1.3 6.7L112 432c27.5 0 56.7-19 56.7-19 18 9 53.1 17.1 79.3 18.6 2.8.2 5.5.2 8 .2s5.2-.1 8-.2c26.2-1.5 61.3-9.5 79.3-18.6 0 0 29.2 19 56.7 19l54.7-145.9c.8-2.1 1.3-4.3 1.3-6.7 0-7.3-4.3-13.5-10.5-16.4zM212 288c-6.6 0-12-9.8-12-22s5.4-22 12-22 12 9.8 12 22-5.4 22-12 22zm88 0c-6.6 0-12-9.8-12-22s5.4-22 12-22 12 9.8 12 22-5.4 22-12 22z' }),
        _react2.default.createElement('path', { d: 'M391.9 127v-.1C386.3 100.3 374.4 80 352 80h-34.6l-8.2-32H202.5l-8.1 32H160c-22.9 0-35.1 20.7-39.8 47l-19.7 104.4 34.2-15.7 16.6-87.7c2.5-10.7 7.3-16 16.1-16h177.1c8.9 0 13.1 5 16.1 16l16.6 87.7 34.3 15.7L391.9 127z' })
      )
    )
  );
};

exports.default = Icon;
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
        _react2.default.createElement('path', { d: 'M413 226.1C406.1 161.9 354 112 288 112c-44.8 0-86.5 22.8-109.4 57.7-7.9-3.7-16.8-5.7-26.1-5.7-34.2 0-62 27.5-62.5 61.6-34.9 11-58 42.6-58 78.4 0 43.9 35.6 80 79.5 80h289c43.9 0 79.5-36.1 79.5-80 0-39.6-29-71.9-67-77.9zm-175.5 83.2c-1.5 1.5-3.6 2.7-5.4 2.7s-4-1.3-5.5-2.8L192 275l11-10.9 29.2 28.9 77-76.9 10.8 11.1-82.5 82.1z' })
      )
    )
  );
};

exports.default = Icon;
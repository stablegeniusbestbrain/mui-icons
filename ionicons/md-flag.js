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
        _react2.default.createElement('path', { d: 'M396 83.2c-13.8 1.7-31.1 4.2-49.6 4.2-28.8 0-55-6.8-81.5-12.2C238 69.7 210.2 64 180.8 64c-58.6 0-78.5 12.1-80.6 13.4L96 80.3V448h48V269.8c9.7-1.2 21.9-2 36.9-2 27.3 0 52.8 10 79.8 15.5 27.6 5.6 56 11.5 86.9 11.5 18.4 0 34.6-2.4 48.4-4 7.5-.9 14-1.7 20-2.7V80.2c-5 1-12.5 2.1-20 3z' })
      )
    )
  );
};

exports.default = Icon;
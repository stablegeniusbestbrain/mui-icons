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
        null,
        _react2.default.createElement('circle', { cx: '9', cy: '12', r: '8' }),
        _react2.default.createElement('path', { d: 'M17 4.3v2c2.3.9 4 3.1 4 5.7s-1.7 4.8-4 5.6v2.1c3.4-.9 6-4 6-7.7s-2.6-6.9-6-7.7z' })
      )
    )
  );
};

exports.default = Icon;
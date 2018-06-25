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
      _react2.default.createElement('path', { d: 'M19.3 10.8c0 .4.1.8.1 1.2 0 4.6-3.9 8.4-8.7 8.4C5.9 20.4 2 16.6 2 12c0-4.6 3.9-8.3 8.7-8.3.9 0 1.8.1 2.7.4v5s-2.6-1.4-4.9.3c-2.4 1.6-1.9 3.4-1.9 3.4s.1 2.7 3.4 2.7c3.6 0 4.7-3.3 4.7-3.3V4.6c.7.3 1.3.8 1.9 1.3 1.6.9 3.2 1.5 5.1 1.5 0 0 .3-.1.3.6 0 .4-.1.8-.5 1.2 0 0-.7 1.1-2.2 1.6z' })
    )
  );
};

exports.default = Icon;
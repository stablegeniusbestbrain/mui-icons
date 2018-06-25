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
      _react2.default.createElement('path', { d: 'M20 19.6V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c.4 0 .9-.1 1.2-.4l-4.4-4.4c-.8.5-1.8.8-2.8.8-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5c0 1-.3 2-.8 2.8l3.8 3.8zM9 13c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M22 7.4c-.1 2-1.4 4.6-4.1 8-2.7 3.6-5 5.4-6.9 5.4-1.2 0-2.1-1.1-2.9-3.3l-1.7-5.9c-.6-2.2-1.2-3.3-1.9-3.3-.1 0-.7.4-1.6 1L2 8.1c1-.9 2-1.8 2.9-2.6 1.3-1.2 2.3-1.8 3-1.8 1.5-.2 2.5.9 2.9 3.2.4 2.4.6 4 .8 4.6.4 2 .9 3 1.5 3 .4 0 1-.6 1.8-2 .9-1.3 1.3-2.3 1.4-3 .1-1.1-.3-1.7-1.4-1.7-.4 0-.9.1-1.4.3.9-3.2 2.8-4.8 5.6-4.7 2 .1 3 1.4 2.9 4z' })
    )
  );
};

exports.default = Icon;
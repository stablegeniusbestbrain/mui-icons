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
      _react2.default.createElement('path', { d: 'M15.1 3c-.5 0-1 .2-1.4.6L2.6 14.7c-.8.8-.8 2.1 0 2.9L5 20h7.7l8.7-8.7c.8-.8.8-2.1 0-2.9l-4.8-4.8c-.4-.4-.9-.6-1.5-.6zM17 18l-2 2h7v-2' })
    )
  );
};

exports.default = Icon;
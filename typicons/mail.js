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
      _react2.default.createElement('path', { d: 'M19 7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9.7 7.3l1.6 1.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l1.6-1.4-.1.1 3.7 3.6H5.7l3.7-3.6-.1-.1zm-4.3 3v-6.8l3.6 3.2L5 17.3zm10.4-3.6l3.6-3.2v6.8l-3.6-3.6zM19 9v.2L12.4 15c-.2.2-.6.2-.8 0L5 9.2V9h14z' })
    )
  );
};

exports.default = Icon;
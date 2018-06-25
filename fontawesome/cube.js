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
      _react2.default.createElement('path', { d: 'M12 21.8l8.6-4.7V8.6L12 11.7v10.1zm-.9-11.6l9.4-3.4-9.4-3.4-9.3 3.4zm11.2-3.3v10.2q0 .5-.3.9t-.6.6L12 23.8q-.4.2-.9.2t-.8-.2L.9 18.6q-.4-.2-.7-.6t-.2-.9V6.9q0-.6.3-1t.8-.6l9.5-3.5q.2-.1.5-.1t.6.1l9.5 3.5q.5.1.8.6t.3 1z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M12 3s-6.2 5.3-9.6 8.2c-.2.2-.4.5-.4.8 0 .6.4 1 1 1h2v7c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-4h4v4c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-7h2c.6 0 1-.4 1-1 0-.3-.2-.6-.4-.8C18.2 8.3 12 3 12 3z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M7.6 4.1L6.2 2.6c-2.4 1.9-4 4.7-4.2 7.9h2c.2-2.7 1.5-5 3.6-6.4zM20 10.5h2c-.2-3.2-1.8-6-4.2-7.8l-1.4 1.4c2 1.4 3.4 3.7 3.6 6.4zm-2 .5c0-3.1-1.6-5.6-4.5-6.3V4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11h.4c.7-.2 1.2-.6 1.4-1.2.1-.3.2-.5.2-.8h-4c0 1.1.9 2 2 2z' })
    )
  );
};

exports.default = Icon;
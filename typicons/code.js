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
      _react2.default.createElement('path', { d: 'M8.2 18c-.5 0-1.1-.2-1.4-.6L2.3 13l4.5-4.4c.7-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L8 13l1.6 1.6c.8.8.8 2 0 2.8-.4.4-.9.6-1.4.6zm7.6 0c-.5 0-1-.2-1.4-.6-.8-.8-.8-2 0-2.8L16 13l-1.6-1.6c-.8-.8-.8-2 0-2.8.8-.8 2.1-.8 2.8 0l4.5 4.4-4.5 4.4c-.3.4-.9.6-1.4.6z' })
    )
  );
};

exports.default = Icon;
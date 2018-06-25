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
      _react2.default.createElement('path', { d: 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.3l.9-4.6.1-.3c0-.4-.2-.8-.5-1.1l-1-1-6.6 6.6C7.2 8 7 8.4 7 9v10c0 1.1.9 2 2 2h9c.8 0 1.5-.5 1.8-1.2l3.1-7.1c0-.2.1-.4.1-.7v-2z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M10 20c-.8 0-1.6-.3-2.1-.9-.6-.5-.9-1.3-.9-2.1s.3-1.6.9-2.1l2.9-2.9-2.9-2.9C7.3 8.6 7 7.8 7 7s.3-1.6.9-2.1c1.1-1.2 3.1-1.2 4.2 0l7.1 7.1-7.1 7.1c-.5.6-1.3.9-2.1.9zm0-14c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7l4.3 4.3-4.3 4.3c-.2.2-.3.4-.3.7s.1.5.3.7c.4.4 1 .4 1.4 0l5.7-5.7-5.7-5.7c-.2-.2-.4-.3-.7-.3z' })
    )
  );
};

exports.default = Icon;
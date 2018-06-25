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
      _react2.default.createElement('path', { d: 'M8 16l-3 3c-.3.3-.8.5-1.2.5-1 0-1.8-.8-1.8-1.7v-.3l1-7.4C3.2 7.8 5.1 6 7.5 6h9c2.4 0 4.3 1.8 4.5 4.1l1 7.4v.3c0 .9-.8 1.7-1.7 1.7-.5 0-1-.2-1.3-.5l-3-3H8zM7 8v2H5v1h2v2h1v-2h2v-1H8V8H7zm9.5 0c-.4 0-.7.3-.7.8s.3.7.7.7.8-.3.8-.7-.4-.8-.8-.8zm-1.7 1.8c-.5 0-.8.3-.8.7s.3.8.8.8.7-.4.7-.8-.3-.7-.7-.7zm3.5 0c-.5 0-.8.3-.8.7s.3.8.8.8.7-.4.7-.8-.3-.7-.7-.7zm-1.8 1.7c-.4 0-.7.3-.7.8s.3.7.7.7.8-.3.8-.7-.4-.8-.8-.8z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-6-6H8l-3 3c-.3.3-.8.5-1.2.5-1 0-1.8-.8-1.8-1.7v-.3l1-7.4c.1-1 .5-1.9 1.2-2.6L2 5.3zM5 10v1h2v2h1v-1.7L6.7 10H5zm11.5-4c2.4 0 4.3 1.8 4.5 4.1l1 7.4v.3c0 .6-.4 1.2-.9 1.5L7.8 6h8.7zm0 2c-.4 0-.7.3-.7.8s.3.7.7.7.8-.3.8-.7-.4-.8-.8-.8zm-1.7 1.8c-.5 0-.8.3-.8.7s.3.8.8.8.7-.4.7-.8-.3-.7-.7-.7zm3.5 0c-.5 0-.8.3-.8.7s.3.8.8.8.7-.4.7-.8-.3-.7-.7-.7zm-1.8 1.7c-.4 0-.7.3-.7.8s.3.7.7.7.8-.3.8-.7-.4-.8-.8-.8z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M10.6 8.9q-.2.3-3.5 6.1-.3.7-.8.7H3.1q-.3 0-.5-.3t0-.5l3.4-6-2.1-3.7q-.2-.3 0-.5.1-.2.4-.2h3.2q.5 0 .9.6zM21.4.3q.1.2 0 .5l-7.1 12.5v.1l4.5 8.2q.1.3 0 .5t-.4.2h-3.2q-.6 0-.9-.6l-4.5-8.3q.2-.5 7.1-12.7.3-.6.8-.6h3.2q.3 0 .5.2z' })
    )
  );
};

exports.default = Icon;
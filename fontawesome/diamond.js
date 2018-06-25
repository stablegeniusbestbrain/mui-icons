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
      _react2.default.createElement('path', { d: 'M1.1 10.3l8.4 8.9-4-8.9H1.1zM12 20.6l4.7-10.3H7.3zm-6.5-12l2.7-5.2H4.7L.9 8.6h4.6zm9 10.6l8.4-8.9h-4.4zM7.4 8.6h9.2l-2.8-5.2h-3.6zm11.1 0h4.6l-3.8-5.2h-3.5zm1.9-6.5l5.1 6.8q.2.3.2.6t-.2.5L12.6 23.7q-.2.3-.6.3t-.6-.3L-1.5 10q-.2-.2-.2-.5t.2-.6l5.1-6.8q.2-.4.7-.4h15.4q.5 0 .7.4z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M16.8 7.8l3.9-3.9-1.4-1.5-3.9 3.9zm6-3.9q0 .3-.3.6L5.3 21.7q-.2.2-.6.2t-.6-.2L1.5 19q-.3-.2-.3-.6t.3-.6L18.7.6q.2-.2.6-.2t.6.2l2.6 2.7q.3.2.3.6zM4.7 1.3l1.3.4-1.3.4-.4 1.3-.4-1.3-1.3-.4 1.3-.4.4-1.3zm4.7 2.2l2.6.8-2.6.8-.8 2.6-.8-2.6-2.7-.8 2.7-.8.8-2.6zm12.4 6.4l1.3.4-1.3.4-.4 1.3-.4-1.3-1.3-.4 1.3-.4.4-1.3zm-8.5-8.6l1.3.4-1.3.4-.4 1.3-.4-1.3-1.4-.4 1.4-.4.4-1.3z' })
    )
  );
};

exports.default = Icon;
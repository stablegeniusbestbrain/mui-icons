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
      _react2.default.createElement('path', { d: 'M14.6 16.7v3q0 .4-.3.6t-.6.3h-3.4q-.4 0-.6-.3t-.3-.6v-3q0-.3.3-.6t.6-.2h3.4q.4 0 .6.2t.3.6zM15 2.6l-.4 10.3q0 .3-.3.6t-.6.2h-3.4q-.4 0-.6-.2t-.3-.6L9 2.6q0-.4.3-.6t.6-.3h4.2q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;
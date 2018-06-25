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
      _react2.default.createElement('path', { d: 'M18.9 7.2L14.1 12l4.8 4.8 1.9-2q.4-.4 1-.2.5.3.5.8v6q0 .4-.3.6t-.6.3h-6q-.5 0-.8-.5-.2-.6.2-1l2-1.9-4.8-4.8-4.8 4.8 2 1.9q.4.4.2 1-.3.5-.8.5h-6q-.4 0-.6-.3t-.3-.6v-6q0-.5.5-.8.6-.2 1 .2l1.9 2L9.9 12 5.1 7.2l-1.9 2q-.3.2-.6.2h-.3q-.6-.3-.6-.8v-6q0-.4.3-.6t.6-.3h6q.5 0 .8.5.2.6-.2 1l-2 1.9L12 9.9l4.8-4.8-2-1.9q-.4-.4-.2-.9.3-.6.8-.6h6q.4 0 .6.3t.3.6v6q0 .5-.5.8h-.4q-.3 0-.6-.2z' })
    )
  );
};

exports.default = Icon;
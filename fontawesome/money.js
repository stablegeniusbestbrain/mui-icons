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
      _react2.default.createElement('path', { d: 'M9.4 15.4h5.2v-1.3h-1.7v-6h-1.6l-2 1.9 1.1 1q.5-.4.7-.7v3.8H9.4v1.3zm6.9-3.4q0 .9-.3 1.9t-.8 1.8-1.4 1.3-1.8.6-1.8-.6-1.4-1.3-.8-1.8-.3-1.9.3-1.9.8-1.8T10.2 7t1.8-.6 1.8.6 1.4 1.3.8 1.8.3 1.9zm6.8 3.4V8.6q-1.4 0-2.4-1t-1-2.5H4.3q0 1.5-1 2.5t-2.4 1v6.8q1.4 0 2.4 1t1 2.5h15.4q0-1.5 1-2.5t2.4-1zm1.8-11.1v15.4q0 .4-.3.6t-.6.3H0q-.3 0-.6-.3t-.3-.6V4.3q0-.4.3-.6t.6-.3h24q.3 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M22.3 11.1v1.8q0 2.6-1.3 4.8t-3.7 3.4-5.3 1.2-5.3-1.2T3 17.7t-1.3-4.8v-1.8q0-.3.3-.6t.6-.2h5.1q.4 0 .6.2t.3.6v1.8q0 .7.3 1.2t.7.7 1 .4.8.2.6 0 .6 0 .8-.2 1-.4.7-.7.3-1.2v-1.8q0-.3.3-.6t.6-.2h5.1q.4 0 .6.2t.3.6zM8.6 2.6v5.1q0 .4-.3.6t-.6.3H2.6q-.4 0-.6-.3t-.3-.6V2.6q0-.4.3-.6t.6-.3h5.1q.4 0 .6.3t.3.6zm13.7 0v5.1q0 .4-.3.6t-.6.3h-5.1q-.4 0-.6-.3t-.3-.6V2.6q0-.4.3-.6t.6-.3h5.1q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;
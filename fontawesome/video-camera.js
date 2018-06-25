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
      _react2.default.createElement('path', { d: 'M24 4.7v14.6q0 .5-.5.8h-.4q-.3 0-.6-.2l-5.4-5.4v2.2q0 1.6-1.1 2.7t-2.7 1.2H3.9q-1.6 0-2.8-1.2T0 16.7V7.3q0-1.6 1.1-2.7t2.8-1.2h9.4q1.6 0 2.7 1.2t1.1 2.7v2.2l5.4-5.4q.3-.2.6-.2h.4q.5.3.5.8z' })
    )
  );
};

exports.default = Icon;
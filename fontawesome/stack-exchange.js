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
      _react2.default.createElement('path', { d: 'M20.3 16.8v.9q0 1.1-.8 1.9t-1.8.8h-.8L13.4 24v-3.6H6.3q-1.1 0-1.8-.8t-.8-1.9v-.9h16.6zm0-4.4v3.4H3.7v-3.4h16.6zm0-4.4v3.4H3.7V8h16.6zm0-1.9V7H3.7v-.9q0-1.1.8-1.9t1.8-.8h11.4q1 0 1.8.8t.8 1.9z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M21.4 18.8q0 1.6-.9 2.6t-2.6.9H6.1q-1.6 0-2.6-.9t-.9-2.6v-1.4q0-.7.2-1.4t.4-1.5.5-1.3.9-1.1 1.1-.7 1.5-.3q.1 0 .6.3t1 .7 1.4.6 1.8.3 1.8-.3 1.4-.6 1-.7.6-.3q.8 0 1.5.3t1.1.7.9 1.1.5 1.3.4 1.5.2 1.4 0 1.4zM17.1 6.9q0 2.1-1.5 3.6T12 12t-3.6-1.5-1.5-3.6 1.5-3.7T12 1.7t3.6 1.5 1.5 3.7z' })
    )
  );
};

exports.default = Icon;
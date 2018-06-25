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
      _react2.default.createElement('path', { d: 'M7.5 21.5c-3.3-1.6-5.6-4.7-6-8.5H0c.5 6.2 5.7 11 11.9 11h.7l-3.8-3.9-1.3 1.4zM12.1 0h-.7l3.8 3.9 1.3-1.4c3.3 1.6 5.6 4.7 6 8.5H24c-.5-6.2-5.7-11-11.9-11zM16 14h2V8c0-1.1-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.9 2 2 2h8v2h2v-2h2v-2H8z' })
    )
  );
};

exports.default = Icon;
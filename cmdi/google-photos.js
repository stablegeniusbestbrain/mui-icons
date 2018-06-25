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
      _react2.default.createElement('path', { d: 'M17 12V7l-5-5v5H7l-5 5h5v5l5 5v-5h5l5-5h-5zm-4.1.9l-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6.9 2.6 2.6.9-2.6.9z' })
    )
  );
};

exports.default = Icon;
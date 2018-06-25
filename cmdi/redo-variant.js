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
      _react2.default.createElement('path', { d: 'M10.5 7C6.9 7 4 9.9 4 13.5S6.9 20 10.5 20H14v-2h-3.5C8 18 6 16 6 13.5S8 9 10.5 9h5.7l-3.1 3.1 1.4 1.4L20 8l-5.5-5.5-1.4 1.4L16.2 7h-5.7zM18 18h-2v2h2v-2z' })
    )
  );
};

exports.default = Icon;
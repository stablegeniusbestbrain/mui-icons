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
      _react2.default.createElement('path', { d: 'M13.5 7c3.6 0 6.5 2.9 6.5 6.5S17.1 20 13.5 20H10v-2h3.5c2.5 0 4.5-2 4.5-4.5S16 9 13.5 9H7.8l3.1 3.1-1.4 1.4L4 8l5.5-5.5 1.4 1.4L7.8 7h5.7zM6 18h2v2H6v-2z' })
    )
  );
};

exports.default = Icon;
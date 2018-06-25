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
      _react2.default.createElement('path', { d: 'M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3m-1 8c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-16c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm10 1.7l-4.6-3.8-1.3 1.5 4.6 3.9M7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8z' })
    )
  );
};

exports.default = Icon;
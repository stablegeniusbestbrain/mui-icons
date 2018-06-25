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
      _react2.default.createElement('path', { d: 'M5.5 0h13c3 0 5.5 2.5 5.5 5.5v13c0 3-2.5 5.5-5.5 5.5h-13c-3 0-5.5-2.5-5.5-5.5v-13C0 2.5 2.5 0 5.5 0zm9.9 15.2c0 1.6-.9 2.6-2.5 2.7v-5.3c1.7.5 2.5 1.1 2.5 2.6zM11.7 6v4.9c-1.4-.4-2.7-1-2.7-2.5s1.2-2.3 2.7-2.4zm3.8 1.6l1-.8c-.9-1.1-2.1-1.9-3.7-2v-1h-1.2v.9c-2.1.2-3.9 1.5-3.9 3.8 0 2.5 2 3.3 3.9 3.8V18c-1.1-.2-2.3-.7-3.2-2l-1.1.8c.9 1.3 2.5 2.2 4.3 2.3v1.1h1.3v-1c2.4-.2 3.8-1.9 3.8-4.1 0-2.5-1.9-3.3-3.8-3.9V6c1.1.2 1.9.8 2.6 1.6z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M18.6 2.8l.7 3.9 3.5 1.8L21 12l1.8 3.5-3.6 1.8-.6 3.9-3.9-.7-2.7 2.8-2.8-2.8-3.9.6-.6-3.9-3.5-1.7L3 12 1.2 8.5l3.5-1.8.7-3.8 3.8.6L12 .7l2.8 2.8 3.8-.7zM9.5 7C8.7 7 8 7.7 8 8.5S8.7 10 9.5 10 11 9.3 11 8.5 10.3 7 9.5 7zm5 7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-6.1 3L17 8.4 15.6 7 7 15.6 8.4 17z' })
    )
  );
};

exports.default = Icon;
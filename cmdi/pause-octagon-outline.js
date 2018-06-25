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
      _react2.default.createElement('path', { d: 'M15 16h-2V8h2v8zm-4 0H9V8h2v8zm4.7-13L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3L8.3 3h7.4zm-.8 2H9.1L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5z' })
    )
  );
};

exports.default = Icon;
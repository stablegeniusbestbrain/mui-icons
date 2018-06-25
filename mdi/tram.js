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
      _react2.default.createElement('path', { d: 'M19 16.9V8.5c0-2.8-2.6-3.4-6-3.5l.8-1.5H17V2H7v1.5h4.8L11 5c-3.1.1-6 .7-6 3.5v8.4c0 1.5 1.2 2.7 2.6 3L6 21.5v.5h2.2l2-2H14l2 2h2v-.5L16.5 20h-.1c1.7 0 2.6-1.4 2.6-3.1zm-7 1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5-4.5H7V9h10v5z' })
    )
  );
};

exports.default = Icon;
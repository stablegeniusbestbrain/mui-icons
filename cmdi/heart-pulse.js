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
      _react2.default.createElement('path', { d: 'M7.5 4C4.5 4 2 6.5 2 9.5c0 .5.1 1 .2 1.5h4.1l1.3-3.4c.3-.8 1.5-.8 1.8 0l2.1 5.4.6-1.4c.1-.3.5-.6.9-.6h8.8c.1-.5.2-1 .2-1.5 0-3-2.5-5.5-5.5-5.5-1.9 0-3.5.9-4.5 2.3C11 4.9 9.4 4 7.5 4zM3 12.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4L11 20c1 .9 1 .9 2 0l5.6-5.5H21c.6 0 1-.4 1-1s-.4-1-1-1h-7.6l-.9 2.3c-.4 1-1.6.9-1.9 0L8.5 9.5l-1 2.3c-.1.4-.5.7-.9.7H3z' })
    )
  );
};

exports.default = Icon;
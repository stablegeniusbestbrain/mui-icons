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
      _react2.default.createElement('path', { d: 'M5.5 21c-.8 0-1.5-.4-1.8-1.1l-2.6-9.5L1 10c0-.6.4-1 1-1h4.6l4.6-6.6c.2-.2.5-.4.8-.4.3 0 .6.2.8.4L17.4 9H22c.6 0 1 .4 1 1v.3l-2.7 9.6c-.3.7-1 1.1-1.8 1.1h-13zM12 4.7L9 9h6l-3-4.3zm0 8.3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;
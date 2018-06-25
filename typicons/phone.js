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
      _react2.default.createElement('path', { d: 'M13.4 7.1l3.7-3.7-.5-.5c-.5-.5-1.5-.5-2.1 0l-1.6 1.6c-.2.3-.4.7-.4 1.1s.2.8.4 1l.5.5zm-6.8 5.8c-.5-.5-1.5-.5-2.1 0l-1.6 1.6c-.2.3-.4.7-.4 1.1s.2.8.4 1l.5.5 3.7-3.7-.5-.5zm11.8-8.2l-.3-.3-3.7 3.7.6.6c.1.1.2.3.2.4s-.1.2-.2.3L9.4 15c-.1.2-.5.2-.7 0l-.6-.6-3.7 3.7.3.3c.3.3 1.3 1.1 3.1 1.1 1.6 0 4.2-.7 7.6-4.1 6.8-6.7 3.2-10.5 3-10.7z' })
    )
  );
};

exports.default = Icon;
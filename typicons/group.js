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
      _react2.default.createElement('path', { d: 'M12 14c1.4 0 2.6-.6 3.5-1.5.9-.9 1.5-2.1 1.5-3.5s-.6-2.6-1.5-3.5C14.6 4.6 13.4 4 12 4s-2.6.6-3.5 1.5C7.6 6.4 7 7.6 7 9s.6 2.6 1.5 3.5c.9.9 2.1 1.5 3.5 1.5zm8 1c.7 0 1.3-.3 1.8-.7.4-.5.7-1.1.7-1.8s-.3-1.3-.7-1.8c-.5-.4-1.1-.7-1.8-.7s-1.3.3-1.8.7c-.4.5-.7 1.1-.7 1.8s.3 1.3.7 1.8 1.1.7 1.8.7zm0 .6c-1.3 0-2.3.4-2.9 1-1.1-1-2.9-1.6-5.1-1.6-2.3 0-4 .6-5.1 1.6-.6-.6-1.6-1-2.9-1-2.2 0-3.5 1.1-3.5 2.2 0 .5 1.3 1.1 3.5 1.1.6 0 1.1-.1 1.6-.2v.3c0 1 2.4 2 6.4 2 3.8 0 6.4-1 6.4-2v-.3c.5.1 1 .2 1.6.2 2.1 0 3.5-.6 3.5-1.1 0-1.1-1.4-2.2-3.5-2.2zM4 15c.7 0 1.3-.3 1.8-.7.4-.5.7-1.1.7-1.8s-.3-1.3-.7-1.8c-.5-.4-1.1-.7-1.8-.7s-1.3.3-1.8.7c-.4.5-.7 1.1-.7 1.8s.3 1.3.7 1.8c.5.4 1.1.7 1.8.7z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M12 5.8c3.1 0 5.5-.6 5.5-1.2 0-.7-2.4-1.2-5.5-1.2s-5.5.5-5.5 1.2c0 .6 2.4 1.2 5.5 1.2zm0 8.6c1.5 0 2.8-1.2 2.8-2.8S13.5 8.9 12 8.9c-1.5 0-2.8 1.2-2.8 2.7 0 1.6 1.3 2.8 2.8 2.8zM12 2c4.8 0 8.7 1.3 8.7 2.9 0 .4-1.1 6.4-1.5 8.8-.2 1.1-2.9 2.6-7.2 2.6-4.3 0-7-1.5-7.2-2.6-.4-2.4-1.5-8.4-1.5-8.8C3.3 3.3 7.2 2 12 2zm6.2 14.1c.2 0 .3.1.3.3v.1c-.3 1.8-.5 3-.6 3.2C17.6 21 15.1 22 12 22c-3.1 0-5.6-1-5.9-2.3-.1-.2-.3-1.4-.6-3.2v-.1c0-.2.1-.3.3-.3.1 0 .2.1.2.1s2.1 1.7 6 1.7 6-1.7 6-1.7.1-.1.2-.1zm-4.8-4.5c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4 0-.7.6-1.3 1.4-1.3.8 0 1.4.6 1.4 1.3z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M15.5 4.5c1.1 0 2.1.4 2.9 1.1 1.5 1.6 1.5 4.1 0 5.7l-7.1 7.1c-.8.7-1.8 1.1-2.8 1.1s-2.1-.4-2.9-1.1c-1.5-1.6-1.5-4.1 0-5.7l.8-.8c0 .8.3 1.5.7 2.1v.1c-.8.8-.8 2.1 0 2.9.3.3.9.5 1.4.5s1-.2 1.4-.5l2.5-2.6L17 9.9c.7-.8.7-2.1 0-2.9-.4-.3-1-.5-1.5-.5s-1 .2-1.4.5l-4.5 4.6c-.1.1-.2.3-.2.3 0 .1.1.3.2.4.1.1.2.1.3.1.2 0 .3 0 .4-.1l2.1-2.1 1.4-1.4c.4.3.6.9.6 1.4 0 .5-.2 1-.6 1.4l-2.1 2.1c-.5.5-1.1.7-1.8.7s-1.2-.2-1.7-.7c-.5-.5-.8-1.1-.8-1.8 0-.6.3-1.3.8-1.7l4.5-4.6c.8-.7 1.8-1.1 2.8-1.1m0-2c-1.6 0-3.1.6-4.2 1.7l-7.1 7.1c-1.1 1.1-1.7 2.6-1.7 4.2s.6 3.1 1.7 4.3c1.2 1.1 2.7 1.7 4.3 1.7s3.1-.6 4.2-1.7l7.1-7.1c1.1-1.1 1.7-2.6 1.7-4.2s-.6-3.1-1.7-4.3c-1.2-1.1-2.7-1.7-4.3-1.7z' })
    )
  );
};

exports.default = Icon;
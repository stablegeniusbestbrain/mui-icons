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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-4.8-4.8-2.6 2.6c-2 1.9-5.1 1.9-7.1 0-1.9-2-1.9-5.1 0-7.1l1.5-1.5c0 .8.1 1.7.4 2.4l-.5.5c-1.1 1.2-1.1 3.1 0 4.3 1.2 1.1 3.1 1.1 4.3 0l2.6-2.6-1.6-1.7c0 .3-.1.5-.3.7-.4.4-1 .4-1.4 0-1.1-1-1.6-2.4-1.5-3.8L2 5.3zm10.7-1.1c2-1.9 5.1-1.9 7.1 0 1.9 2 1.9 5.1 0 7.1l-1.5 1.5c0-.8-.1-1.7-.4-2.4l.5-.5c1.1-1.2 1.1-3.1 0-4.3-1.2-1.1-3.1-1.1-4.3 0L10.8 9 9.4 7.6l3.3-3.4zm.7 5c.4-.4 1-.4 1.4 0 1.4 1.3 1.8 3.3 1.3 5l-1.8-1.7c-.1-.7-.4-1.4-.9-1.9-.4-.4-.4-1 0-1.4z' })
    )
  );
};

exports.default = Icon;
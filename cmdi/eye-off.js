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
      _react2.default.createElement('path', { d: 'M11.8 9l3.2 3.2V12c0-1.7-1.3-3-3-3h-.2zm-4.3.8l1.6 1.5c-.1.3-.1.5-.1.7 0 1.7 1.3 3 3 3 .2 0 .4 0 .6-.1l1.6 1.6c-.7.3-1.4.5-2.2.5-2.8 0-5-2.2-5-5 0-.8.2-1.5.5-2.2zM2 4.3l2.3 2.3.4.4C3.1 8.3 1.8 10 1 12c1.7 4.4 6 7.5 11 7.5 1.6 0 3-.3 4.4-.8l.4.4 2.9 2.9 1.3-1.3L3.3 3M12 7c2.8 0 5 2.2 5 5 0 .6-.1 1.3-.4 1.8l3 2.9c1.5-1.2 2.7-2.8 3.4-4.7-1.7-4.4-6-7.5-11-7.5-1.4 0-2.7.2-4 .7l2.2 2.2c.5-.3 1.2-.4 1.8-.4z' })
    )
  );
};

exports.default = Icon;
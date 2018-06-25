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
      _react2.default.createElement('path', { d: 'M4.2 3c-.6 0-1.1.5-1.2 1.1v13.7c0 .7.5 1.2 1.2 1.2.1 0 .2 0 .3-.1 4-2.1 8.1-4.5 12-6.8.4-.2.7-.6.7-1.1 0-.4-.2-.8-.6-1-4.1-2.4-8.4-4.9-12.1-7h-.3zm15.7 3h-.4c-.9.6-2 1.2-3 1.8.4.1.7.3 1 .5 1 .6 1.6 1.6 1.6 2.7 0 1.2-.7 2.3-1.8 2.8-1.4.8-4.4 2.6-6 3.5 2.8 1.6 5.5 3.2 8.2 4.7h.4c.6 0 1.2-.5 1.2-1.2V7.1C21 6.5 20.5 6 19.9 6z' })
    )
  );
};

exports.default = Icon;
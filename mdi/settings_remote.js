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
      _react2.default.createElement('path', { d: 'M15 9H9c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7 6l1.5 1.5C9.4 6.6 10.6 6 12 6s2.6.6 3.5 1.5L16.9 6c-1.2-1.2-3-2-4.9-2s-3.7.8-5 2zm5-6C9 0 6.2 1.2 4.2 3.2l1.4 1.4C7.3 3 9.5 2 12 2s4.7 1 6.4 2.6l1.4-1.4C17.8 1.2 15 0 12 0z' })
    )
  );
};

exports.default = Icon;
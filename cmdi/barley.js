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
      _react2.default.createElement('path', { d: 'M7.3 18.3c-.8-1.1-.8-2.5-.8-3.8 1.7 1 3.3 2 4.2 3.2l.3.5v-2.3c-1.5-.9-2.9-1.8-3.7-2.8-.8-1.2-.8-2.5-.8-3.9 1.7 1 3.3 2 4.2 3.2l.3.6v-2.3c-1.5-.9-2.9-1.8-3.7-2.9-.8-1.1-.8-2.5-.8-3.8 1.7 1 3.3 2 4.2 3.2.1.1.2.3.2.4l-.3-1.8c0-1.5.7-3 1.4-4.6.6 1.5 1.3 3 1.3 4.5.1.6-.1 1.3-.2 1.9 0-.2.1-.3.2-.4C14.2 6 15.8 5 17.5 4c0 1.3 0 2.7-.8 3.8-.8 1.1-2.2 2-3.7 2.9V13l.3-.6c.9-1.2 2.5-2.2 4.2-3.2 0 1.4 0 2.7-.8 3.9-.8 1-2.2 1.9-3.7 2.8v2.3l.3-.5c.9-1.2 2.5-2.2 4.2-3.2 0 1.3 0 2.7-.8 3.8-.8 1.1-2.2 2-3.7 2.9V23h-2v-1.8c-1.5-.9-2.9-1.8-3.7-2.9z' })
    )
  );
};

exports.default = Icon;
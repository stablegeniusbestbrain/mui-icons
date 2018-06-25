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
      _react2.default.createElement('path', { d: 'M16.4 8.6c-1.1 0-2.2.4-3 1.2L12 11.2l-1.4-1.3c-.8-.9-1.9-1.3-3-1.3-1.2 0-2.3.4-3.1 1.3-.8.8-1.2 1.9-1.2 3 0 1.2.4 2.3 1.2 3.1.8.8 1.9 1.2 3.1 1.2s2.2-.4 3-1.2l1.4-1.4 1.4 1.4c.8.8 1.9 1.2 3 1.2s2.3-.4 3.1-1.2c.8-.8 1.3-1.9 1.3-3.1s-.5-2.2-1.3-3c-.8-.9-1.9-1.3-3.1-1.3zm-7.5 5.6c-.7.7-1.9.7-2.6 0-.4-.3-.5-.8-.5-1.3s.1-.9.5-1.3c.3-.3.8-.5 1.3-.5s.9.2 1.3.5l1.3 1.3-1.3 1.3zm8.8 0c-.7.7-1.8.7-2.6 0l-1.3-1.3 1.3-1.3c.7-.7 1.9-.7 2.6 0 .4.4.6.8.6 1.3s-.2 1-.6 1.3z' })
    )
  );
};

exports.default = Icon;
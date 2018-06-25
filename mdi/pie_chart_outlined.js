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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.1c3.6.4 6.5 3.3 6.9 6.9H13V4.1zM4 12c0-4.1 3.1-7.4 7-7.9v15.8c-3.9-.5-7-3.8-7-7.9zm9 7.9V13h6.9c-.4 3.6-3.3 6.5-6.9 6.9z' })
    )
  );
};

exports.default = Icon;
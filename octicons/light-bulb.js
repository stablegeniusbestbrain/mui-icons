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
      _react2.default.createElement('path', { d: 'M12.8 0C8.2 0 4.5 3.3 4.5 7.5c0 1.4.8 3.4 1.5 4.5 2 3.4 2.7 4.2 3 6v1.5h7.5V18c.3-1.8 1-2.6 3-6 .7-1.1 1.5-3.1 1.5-4.5C21 3.3 17.3 0 12.8 0zm5.4 11.2c-.4.7-.7 1.2-1 1.7-1.3 2.1-1.9 3.1-2.2 4.8v.3h-4.5v-.3c-.3-1.7-.9-2.7-2.2-4.8-.3-.5-.6-1-1-1.7-.6-1-1.3-2.7-1.3-3.7 0-3.3 3-6 6.8-6 1.8 0 3.5.6 4.8 1.8 1.2 1.1 1.9 2.6 1.9 4.2 0 1-.7 2.7-1.3 3.7zM9 21h7.5c-.3 1.7-1.9 3-3.7 3S9.3 22.7 9 21z' })
    )
  );
};

exports.default = Icon;
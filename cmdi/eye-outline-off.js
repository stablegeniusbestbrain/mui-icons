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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-3-3.1c-1.2.4-2.4.6-3.7.6-5 0-9.3-3.1-11-7.5.7-1.8 1.8-3.3 3.2-4.5L2 5.3zM12 9c1.7 0 3 1.3 3 3 0 .4-.1.7-.2 1L11 9.2c.3-.1.6-.2 1-.2zm0-4.5c5 0 9.3 3.1 11 7.5-.8 2.1-2.2 3.9-4 5.2l-1.4-1.4c1.3-1 2.5-2.3 3.2-3.8-1.6-3.4-5-5.5-8.8-5.5-1.1 0-2.2.2-3.2.5L7.3 5.5c1.4-.7 3-1 4.7-1zM3.2 12c1.6 3.4 5 5.5 8.8 5.5.7 0 1.4-.1 2-.2L11.7 15c-1.4-.1-2.6-1.3-2.7-2.7L5.6 8.9c-1 .8-1.8 1.9-2.4 3.1z' })
    )
  );
};

exports.default = Icon;
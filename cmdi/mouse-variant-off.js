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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-1.4-1.4C16.4 22 14.8 23 13 23c-2.8 0-5-2.2-5-5v-1.1c-2.3-.5-4-2.5-4-4.9V9h1.7L2 5.3zM14 7h-4V2.1c2.3.5 4 2.5 4 4.9zM8 2.1v4.1L5.4 3.6C6.1 2.8 7 2.3 8 2.1zm6 9.9v.2L10.8 9H14v3zm-4 4.9V18c0 1.7 1.3 3 3 3 1.3 0 2.4-.8 2.8-1.9l-3.4-3.4c-.7.6-1.5 1-2.4 1.2zm6-3.9c0-2.2 1.8-4 4-4h2l-1 1 1 1h-2c-1.1 0-2 .9-2 2v3.2l-2-2V13z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M4 12V3H2v9c0 2.8 2.2 5 5 5h6v-2H7c-1.7 0-3-1.3-3-3zm18.8 5.2c-.4-.7-1.3-.9-2-.6l-1.1.5-3.4-7c-.3-.6-1-1.1-1.8-1.1H11V3H5v8c0 1.7 1.3 3 3 3h7l3.4 7 3.7-1.7c.8-.4 1.1-1.3.7-2.1z' })
    )
  );
};

exports.default = Icon;
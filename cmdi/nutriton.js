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
      _react2.default.createElement('path', { d: 'M22 18c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4v-2h12v2zM4 3h10c1.1 0 2 .9 2 2v9H8v5H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 3v2h2V6H4zm10 2V6H8v2h6zM4 10v2h2v-2H4zm4 0v2h6v-2H8zm-4 4v2h2v-2H4z' })
    )
  );
};

exports.default = Icon;
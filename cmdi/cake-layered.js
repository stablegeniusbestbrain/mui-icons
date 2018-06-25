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
      _react2.default.createElement('path', { d: 'M21 21v-4c0-1.1-.9-2-2-2h-1v-3c0-1.1-.9-2-2-2h-3V8h-2v2H8c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v4H1v2h22v-2M12 7c1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1L12 1l-1.7 3c-.2.3-.3.6-.3 1 0 1.1.9 2 2 2z' })
    )
  );
};

exports.default = Icon;
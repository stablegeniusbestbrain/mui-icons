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
      _react2.default.createElement('path', { d: 'M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 4h7c1.1 0 2 .9 2 2v3h-2V6H4v5h2V9l3 3-3 3v-2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 16h-7c-1.1 0-2-.9-2-2v-3h2v3h7v-5h-2v2l-3-3 3-3v2h2c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2z' })
    )
  );
};

exports.default = Icon;
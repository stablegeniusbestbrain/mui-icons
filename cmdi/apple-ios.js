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
      _react2.default.createElement('path', { d: 'M20 9V7h-4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v2h-4v2h4c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V9m-5 6H9V9h2m0-2H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM4 17h2v-6H4m0-2h2V7H4v2z' })
    )
  );
};

exports.default = Icon;
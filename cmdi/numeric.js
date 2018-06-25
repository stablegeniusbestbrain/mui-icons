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
      _react2.default.createElement('path', { d: 'M4 17V9H2V7h4v10H4zm18-2c0 1.1-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .9 2 2v1.5c0 .8-.7 1.5-1.5 1.5.8 0 1.5.7 1.5 1.5V15zm-8 0v2H8v-4c0-1.1.9-2 2-2h2V9H8V7h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2v2h4z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M2 5v13h9v-2H4V7h13v4h2V5H2zm7 4v5l3.5-2.5L9 9zm12 2.7l-4.9 4.9-2.1-2.1-1.4 1.4 3.5 3.5 6.3-6.3-1.4-1.4z' })
    )
  );
};

exports.default = Icon;
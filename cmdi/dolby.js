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
      _react2.default.createElement('path', { d: 'M2 5v14h20V5H2zm4 12H4V7h2c2.9.1 5.1 2.3 5 5 .1 2.7-2.1 4.9-5 5zm14 0h-2c-2.9-.1-5.1-2.3-5-5-.1-2.7 2.1-4.9 5-5h2v10z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M22 11v2H9V7h9c2.2 0 4 1.8 4 4zM2 14v2h6v2h8v-2h6v-2M7.1 12.1c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0z' })
    )
  );
};

exports.default = Icon;
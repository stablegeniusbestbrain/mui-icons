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
      _react2.default.createElement('path', { d: 'M8 3h10l-1 2h-3.3c.5.6.9 1.3 1.1 2H18l-1 2h-2c-.3 2.6-2.3 4.6-4.8 5h-.7l6 7H13l-6-7v-2h2.5c1.8 0 3.2-1.3 3.5-3H7l1-2h4.7c-.6-1.2-1.8-2-3.2-2H7l1-2z' })
    )
  );
};

exports.default = Icon;
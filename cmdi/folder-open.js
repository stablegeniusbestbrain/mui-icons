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
      _react2.default.createElement('path', { d: 'M19 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6l2 2h7c1.1 0 2 .9 2 2H4v10l2.1-8h17.1l-2.3 8.5c-.2.9-1 1.5-1.9 1.5z' })
    )
  );
};

exports.default = Icon;
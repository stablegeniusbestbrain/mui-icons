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
      _react2.default.createElement('path', { d: 'M7 19v-2h2v2H7zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zm-8-4v-2h2v2H7zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zm-8-4V9h2v2H7zm4 0V9h2v2h-2zm4 0V9h2v2h-2zM7 7V5h2v2H7zm4 0V5h2v2h-2zm4 0V5h2v2h-2z' })
    )
  );
};

exports.default = Icon;
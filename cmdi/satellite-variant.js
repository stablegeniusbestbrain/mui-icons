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
      _react2.default.createElement('path', { d: 'M11.6 1l5.7 5.7-2.1 2.1L13 6.7l-1.4 1.4 2.4 2.3-1.2 1.2.4.4c1-.4 2.1-.2 2.9.5l-3.6 3.6c-.7-.8-.9-1.9-.5-2.9l-.4-.4-1.2 1.2-2.3-2.4L6.7 13l2.1 2.2-2.1 2.1L1 11.6l2.1-2.1 2.2 2.1 1.4-1.4-2.9-2.8c-.7-.8-.7-2.1 0-2.8l.8-.8c.7-.7 2-.7 2.8 0l2.8 2.9 1.4-1.4-2.1-2.2L11.6 1zM18 14c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2h2zm4 0c0 4.4-3.6 8-8 8v-2c3.3 0 6-2.7 6-6h2z' })
    )
  );
};

exports.default = Icon;
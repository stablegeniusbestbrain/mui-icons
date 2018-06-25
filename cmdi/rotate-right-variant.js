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
      _react2.default.createElement('path', { d: 'M10 4V1l4 4-4 4V6c-3.3 0-6 2.7-6 6l.1 1h-2L2 12c0-4.4 3.6-8 8-8zm7-2h3c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zM4 15h9v7H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;
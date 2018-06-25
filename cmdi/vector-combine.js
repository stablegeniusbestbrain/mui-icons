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
      _react2.default.createElement('path', { d: 'M3 1c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h4v4c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-4V3c0-1.1-.9-2-2-2H3zm0 2h11v4H9c-1.1 0-2 .9-2 2v5H3V3zm6 6h5v5H9V9zm7 0h4v11H9v-4h5c1.1 0 2-.9 2-2V9z' })
    )
  );
};

exports.default = Icon;
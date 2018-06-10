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
      _react2.default.createElement('path', { d: 'M19 3h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2zm-2 14l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5m-8 0H3v6c0 1.1.9 2 2 2h6v-5l-4 1M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M5 19.9l1.8-1.7-1.5-1.5-1.8 1.8m0-14l1.8 1.8 1.5-1.5L5 3m15.5 15.5l-1.8-1.8-1.5 1.5L19 20m-6 2.4v-2.9h-2v2.9h2zM19 3l-1.8 1.8 1.5 1.5 1.7-1.8m-9.4-1h2v-3h-2m-6 14h14v-6H5v6z' })
    )
  );
};

exports.default = Icon;
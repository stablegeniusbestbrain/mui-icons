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
      _react2.default.createElement('path', { d: 'M2 22V7c0-.6.4-1 1-1h4V2h10v4h4c.6 0 1 .4 1 1v15h-8v-5h-4v5H2zM9 4v6h2V8h2v2h2V4h-2v2h-2V4H9zM4 20h4v-3H4v3zm0-5h4v-3H4v3zm12 5h4v-3h-4v3zm0-5h4v-3h-4v3zm-6 0h4v-3h-4v3z' })
    )
  );
};

exports.default = Icon;
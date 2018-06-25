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
      _react2.default.createElement('path', { d: 'M3 4h2v6h4V4h2v14H9v-6H5v6H3V4zm10 4h2.3l.3-3h2l-.3 3h2l.3-3h2l-.3 3H23v2h-1.9l-.2 2H23v2h-2.3l-.3 3h-2l.3-3h-2l-.3 3h-2l.3-3H13v-2h1.9l.2-2H13V8zm4.1 2l-.2 2h2l.2-2h-2z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M13 9h1v2h-3V7h2v2zm5.5 0l-2.1-2.1 1.2-1.3L20 8v2h-2v1h-3V9h3.5zM13 3.5V2h-1v2h1v2h-2V4H9V2H8v2H6v1H4V4c0-1.1.9-2 2-2h8l2.4 2.4-1.3 1.2L13 3.5zM20 20c0 1.1-.9 2-2 2h-2v-2h2v-1h2v1zm-2-5h2v3h-2v-3zm-6 7v-2h3v2h-3zm-4 0v-2h3v2H8zm-2 0c-1.1 0-2-.9-2-2v-2h2v2h1v2H6zm-2-8h2v3H4v-3zm0-4h2v3H4v-3zm14 1h2v3h-2v-3zM4 6h2v3H4V6z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M16.5 15.5H22V17h-5.5v1.8L14 16.3l2.5-2.5v1.7zm3 4.3V18l2.5 2.5-2.5 2.5v-1.7H14v-1.5h5.5zM9.5 5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5.8 8.9L4 9.7V13H2V8.3l5.3-2.1c.2-.1.5-.2.7-.2.7 0 1.3.3 1.7 1l.9 1.6c1 1.4 2.6 2.4 4.4 2.4v2c-2.2 0-4.2-1-5.4-2.6l-.6 3 2 2V23H9v-6l-2.2-2-1.7 8H3L5.8 8.9z' })
    )
  );
};

exports.default = Icon;
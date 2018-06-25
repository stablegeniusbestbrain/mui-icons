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
      _react2.default.createElement('path', { d: 'M.9 4.2l1.3-1.3L20 20.7 18.7 22l-2-2H4c-1.1 0-2-.9-2-2V6c0-.2 0-.4.1-.6L.9 4.2zM20 8V6H7.8l-2-2H20c1.1 0 2 .9 2 2v12c0 .6-.3 1.1-.7 1.5L19.8 18h.2v-6h-6.2l-4-4H20zM4 8h.7L4 7.3V8zm0 4v6h10.7l-6-6H4z' })
    )
  );
};

exports.default = Icon;
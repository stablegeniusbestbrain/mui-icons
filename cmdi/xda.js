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
      _react2.default.createElement('path', { d: 'M-.1 16.8L3.2 13-.1 9.1l1.6-1.2 3 3.5 3-3.5L9 9.1 5.8 13l3.3 3.8-1.6 1.3-3-3.6-3 3.6L0 16.8zM24 17c0 .6-.4 1-1 1h-3c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2v-2h-4V8h5c.5 0 1 .4 1 1m-2 5h-2v2h2v-2zm-6 3c0 .6-.4 1-1 1h-3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2V5h2v12zm-2-1v-6h-2v6h2z' })
    )
  );
};

exports.default = Icon;
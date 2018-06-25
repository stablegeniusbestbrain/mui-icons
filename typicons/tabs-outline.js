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
      _react2.default.createElement('path', { d: 'M18 4H8c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-1h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5 19v-9h8.5c.3 0 .5.2.5.5V19H5zm13-3h-3v-5.5c0-.8-.7-1.5-1.5-1.5H8V6h10v10z' })
    )
  );
};

exports.default = Icon;
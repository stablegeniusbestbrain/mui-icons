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
      _react2.default.createElement('path', { d: 'M3 13.5L2.3 12h5.2l-.6-1.5H2L1.3 9h7.8l-.6-1.5H1.1L.3 6H4c0-1.1.9-2 2-2h12v4h3l3 4v5h-2c0 1.7-1.3 3-3 3s-3-1.3-3-3h-4c0 1.7-1.3 3-3 3s-3-1.3-3-3H4v-3.5H3zm16 5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm1.5-9H18V12h4.5l-2-2.5zM9 18.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z' })
    )
  );
};

exports.default = Icon;
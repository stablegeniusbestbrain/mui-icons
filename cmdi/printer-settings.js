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
      _react2.default.createElement('path', { d: 'M18 2v4H6V2h12zm1 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-3 7v-5H8v5h8zm3-11c1.7 0 3 1.3 3 3v6h-4v4H6v-4H2v-6c0-1.7 1.3-3 3-3h14zm-4 17v-2h2v2h-2zm-4 0v-2h2v2h-2zm-4 0v-2h2v2H7z' })
    )
  );
};

exports.default = Icon;
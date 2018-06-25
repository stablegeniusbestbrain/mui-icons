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
      _react2.default.createElement('path', { d: 'M21.6 11.6L23 13l-9.5 9.5-5.1-5.1L9.8 16l3.7 3.7 8.1-8.1zM4 16V3h5c2.2 0 4 1.8 4 4 0 1.5-.9 2.9-2.2 3.5L14 16h-2l-2.9-5H6v5H4zm2-7h3c1.1 0 2-.9 2-2s-.9-2-2-2H6v4z' })
    )
  );
};

exports.default = Icon;
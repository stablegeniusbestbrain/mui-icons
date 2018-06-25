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
      _react2.default.createElement('path', { d: 'M13.5 18h3L12 22.5 7.5 18h3v-7.5h3V18zM18 6c0-.7-1.4-4.5-6.7-4.5-3.7 0-6.8 2.9-6.8 6C1.5 7.5 0 9.8 0 12c0 2.3 1.5 4.5 4.5 4.5H9v-2H4.5C2.1 14.5 2 12.4 2 12c0-.3 0-2.6 2.5-2.6h2V7.5c0-2.1 2.3-4.1 4.8-4.1 3.8 0 4.6 2.4 4.8 2.7v1.8H18c1.2 0 4.1.4 4.1 3.4 0 3.1-3.4 3.3-4.1 3.3h-3v1.9h3c3.1 0 6-1.7 6-5.2C24 7.6 21.1 6 18 6z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M2 3h20v10h-4v8h-2v-8H8v8H6v-8H2V3zm17 8l1-1V7.1L16.1 11H19zm-5.7 0l6-6h-2.8l-6 6h2.8zm-5.6 0l6-6h-2.9l-6 6h2.9zM5.2 5L4 6.2V9l4-4H5.2z' })
    )
  );
};

exports.default = Icon;
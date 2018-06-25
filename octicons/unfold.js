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
      _react2.default.createElement('path', { d: 'M18.8 11.3l3.7 3.7c0 .8-.7 1.5-1.5 1.5h-6V15h5.3l-3-3H6.8l-3 3H9v1.5H3c-.8 0-1.5-.7-1.5-1.5l3.8-3.7-3.8-3.8C1.5 6.7 2.2 6 3 6h6v1.5H3.8l3 3h10.5l3-3H15V6h6c.8 0 1.5.7 1.5 1.5l-3.7 3.8zM10.5 9h3V4.5h3L12 0 7.5 4.5h3V9zm3 4.5h-3V18h-3l4.5 4.5 4.5-4.5h-3v-4.5z' })
    )
  );
};

exports.default = Icon;
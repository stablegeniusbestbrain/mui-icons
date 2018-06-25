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
      _react2.default.createElement('path', { d: 'M7.4 18.6L8.8 20l3.2-3.2 3.2 3.2 1.4-1.4L12 14l-4.6 4.6zm9.2-13.2L15.2 4 12 7.2 8.8 4 7.4 5.4 12 10l4.6-4.6z' })
    )
  );
};

exports.default = Icon;
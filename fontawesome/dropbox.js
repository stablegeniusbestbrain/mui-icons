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
      _react2.default.createElement('path', { d: 'M5.4 9.5l6.6 4.1-4.6 3.8-6.5-4.3zm13.2 7.4v1.4l-6.6 4-6.5-4v-1.4l1.9 1.3 4.6-3.8 4.6 3.8zM7.4 1.6L12 5.4 5.4 9.5.9 5.9zm11.2 7.9l4.5 3.6-6.5 4.3-4.6-3.8zm-2-7.9l6.5 4.3-4.5 3.6L12 5.4z' })
    )
  );
};

exports.default = Icon;
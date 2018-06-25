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
      _react2.default.createElement('path', { d: 'M14.8 13.4l-1.4 1.4 3.2 3.1-2.1 2.1H20v-5.5l-2 2-3.2-3.1zM14.5 4l2 2L4 18.6 5.4 20 18 7.5l2 2V4m-9.4 5.2L5.4 4 4 5.4l5.2 5.2 1.4-1.4z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M5.7 3.4l-.6 3.2h12.3L17 8.7H4.7l-.6 3.2h12.3l-.7 3.6-5 1.7-4.3-1.7.3-1.6h-3L3 17.7l7.1 2.9 8.2-2.9 1.1-5.8.2-1.2L21 3.4H5.7z' })
    )
  );
};

exports.default = Icon;
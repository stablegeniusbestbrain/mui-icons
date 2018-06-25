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
      _react2.default.createElement('path', { d: 'M14 14.5h-4l2-7.3zm1.1 4.4h4.2L14.9 5.1H9.1L4.7 18.9h4.2l5.1-4.2zm7.2-13.3v12.8q0 1.6-1.2 2.7t-2.7 1.2H5.6q-1.6 0-2.7-1.2t-1.2-2.7V5.6q0-1.6 1.2-2.7t2.7-1.2h12.8q1.6 0 2.7 1.2t1.2 2.7z' })
    )
  );
};

exports.default = Icon;
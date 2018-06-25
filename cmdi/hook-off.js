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
      _react2.default.createElement('path', { d: 'M13 9.9v1.3l2 2V9.9c2.1-.6 3.4-2.8 2.9-4.9-.6-2.2-2.8-3.4-4.9-2.9-2.1.6-3.4 2.7-2.9 4.9.4 1.4 1.5 2.5 2.9 2.9zM14 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4.7 18l-3.8-3.9c-.7 2.7-3.4 4.4-6.1 3.7C6.6 21.3 5 19.3 5 17v-5l5 5H7c0 1.7 1.3 3 3 3s3-1.3 3-3v-.7L2 5.3 3.3 4l9.7 9.7 2 2 5 5-1.3 1.3z' })
    )
  );
};

exports.default = Icon;
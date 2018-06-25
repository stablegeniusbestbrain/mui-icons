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
      _react2.default.createElement('path', { d: 'M11.3 6c0-1.8 1.4-3.2 3.2-3.2s3.3 1.4 3.3 3.2c0 .4.3.8.7.8s.8-.4.8-.8v-.7h1.5V6c0 1.2-1.1 2.3-2.3 2.3S16.3 7.2 16.3 6c0-1-.8-1.7-1.8-1.7S12.8 5 12.8 6H14v1.3c2.9.9 5 3.5 5 6.7 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.2 2.1-5.8 5-6.7V6h1.3zM22 6h2v1h-2V6zm-3-2V2h1v2h-1zm1.9.4L22.3 3l.7.7-1.4 1.4-.7-.7z' })
    )
  );
};

exports.default = Icon;
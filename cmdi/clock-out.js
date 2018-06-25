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
      _react2.default.createElement('path', { d: 'M18 1l1.8 1.8-4 4 1.4 1.4 4-4L23 6V1M12 8c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 2.2c2.7 0 4.8 2.1 4.8 4.8 0 2.7-2.1 4.9-4.8 4.9-2.7 0-4.9-2.2-4.9-4.9s2.2-4.8 4.9-4.8zM11 12v3.7l3.2 1.8.7-1.3-2.4-1.4V12' })
    )
  );
};

exports.default = Icon;
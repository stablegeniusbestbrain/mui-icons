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
      _react2.default.createElement('path', { d: 'M12 20c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm7-12.6L20.5 6c-.5-.5-.9-1-1.5-1.4L17.6 6c-1.5-1.3-3.5-2-5.6-2-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-2.1-.7-4.1-2-5.6zM11 14h2V8h-2m4-7H9v2h6V1z' })
    )
  );
};

exports.default = Icon;
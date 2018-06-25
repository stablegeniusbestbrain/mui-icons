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
      _react2.default.createElement('path', { d: 'M19 8.8c-.2-3.7-3.3-6.7-7-6.7s-6.8 3-7 6.7v6.3c0 3.9 3.1 7 7 7s7-3.1 7-7V8.8zm-7 8.8c-2.2 0-4.1-1.3-5-3.2V14c1.3 1.3 3 2.1 5 2.1s3.7-.8 5-2.1v.4c-.9 1.9-2.8 3.2-5 3.2zm0-13.5c2.8 0 5 2.3 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 16c-2.3 0-4.2-1.5-4.8-3.6 1.2 1.3 2.9 2.1 4.8 2.1s3.6-.8 4.8-2.1c-.6 2.1-2.5 3.6-4.8 3.6z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M7.5 7.5c1.7-1.6 3.8-2.8 5.9-3.3C18 3 21 6 19.8 10.6c-.5 2.1-1.7 4.2-3.3 5.9-1.7 1.6-3.8 2.8-5.9 3.3C6 21 3 18 4.2 13.4c.5-2.1 1.7-4.2 3.3-5.9zm3.1 3.8l-.3.3 2.1 2.1.3-.3-2.1-2.1zm1-1l-.3.3 2.1 2.1.3-.3-2.1-2.1zm-2 2l-.3.3 2.1 2.1.3-.3-2.1-2.1zm3-3l-.3.3 2.1 2.1.3-.3-2.1-2.1zm-4 4l-.3.3 2.1 2.1.3-.3-2.1-2.1zm5-5l-.3.3 2.1 2.1.3-.3-2.1-2.1z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M.8 20.6H0V1.7h.8v18.9zm.9 0h-.4V1.7h.4v18.9zm1.2 0h-.4V1.7h.4v18.9zm2.1 0h-.4V1.7H5v18.9zm2.2 0h-.9V1.7h.9v18.9zm1.6 0h-.4V1.7h.4v18.9zm.9 0h-.4V1.7h.4v18.9zm.8 0h-.4V1.7h.4v18.9zm2.1 0h-.8V1.7h.8v18.9zm2.1 0h-.8V1.7h.8v18.9zm1.7 0h-.8V1.7h.8v18.9zm1.7 0h-.8V1.7h.8v18.9zm1.3 0h-.9V1.7h.9v18.9zm2.5 0h-1.3V1.7h1.3v18.9zm.8 0h-.4V1.7h.4v18.9zm1.3 0h-.8V1.7h.8v18.9z' })
    )
  );
};

exports.default = Icon;
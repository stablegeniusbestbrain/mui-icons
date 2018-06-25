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
      _react2.default.createElement('path', { d: 'M6.9 12v6.9H3.4V12h3.5zM12 5.1v13.8H8.6V5.1H12zm13.7 15.5v1.7H-1.7V1.7H0v18.9h25.7zm-8.6-12v10.3h-3.4V8.6h3.4zm5.2-5.2v15.5h-3.4V3.4h3.4z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M48 384h80v-16H64V144h64v-16H48zm336-256v16h64v224h-64v16h80V128z' }),
        _react2.default.createElement('path', { d: 'M112 192h16v128h-16zm272 0h16v128h-16zm-64-32h16v192h-16zm-144 0h16v192h-16zm71 16h16v160h-16z' })
      )
    )
  );
};

exports.default = Icon;
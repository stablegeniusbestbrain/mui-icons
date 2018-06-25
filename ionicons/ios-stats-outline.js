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
        _react2.default.createElement('path', { d: 'M176 448h64V64h-64v384zm16-368h32v352h-32V80zM80 448h64V288H80v160zm16-144h32v128H96V304zm176 144h64V224h-64v224zm16-208h32v192h-32V240zm80-112v320h64V128h-64zm48 304h-32V144h32v288z' })
      )
    )
  );
};

exports.default = Icon;
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
        _react2.default.createElement('path', { d: 'M248 400h16v64h-16zm0-352h16v64h-16zM48 248h64v16H48zm352 0h64v16h-64zM148.452 352.163l11.313 11.314-45.254 45.254-11.313-11.312zM397.49 103.262l11.313 11.313-45.255 45.255-11.313-11.314zM159.905 148.52l-11.314 11.313-45.253-45.254 11.313-11.315zm248.765 248.9l-11.313 11.315-45.255-45.255 11.314-11.313zM256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z' })
      )
    )
  );
};

exports.default = Icon;
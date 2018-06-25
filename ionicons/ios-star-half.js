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
        _react2.default.createElement('path', { d: 'M172.248 304.93L117.57 464.005 256 365.37l138.445 98.634-54.685-159.067L480 207H308.613L256 48.005 203.402 207H32l140.248 97.93zM256 100.75L297 224h131l-108 74.71 42.623 122.482L256 345.257V100.75z' })
      )
    )
  );
};

exports.default = Icon;
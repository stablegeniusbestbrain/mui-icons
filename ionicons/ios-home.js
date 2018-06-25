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
        _react2.default.createElement('path', { d: 'M256 112L96 240v208h112V320h96v128h112V240L256 112z' }),
        _react2.default.createElement('path', { d: 'M256 64l-96 76.8V96H96v96l-32 25.498 11.51 11.384L256 84.49l180.49 144.393L448 217.498 256 64z' })
      )
    )
  );
};

exports.default = Icon;
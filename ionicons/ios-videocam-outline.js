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
        _react2.default.createElement('path', { d: 'M303.7 128h-221C63.9 128 47 142.1 47 160.7v187.9c0 18.6 16.9 35.4 35.7 35.4h221c18.8 0 33.3-16.8 33.3-35.4V160.7c0-18.6-14.5-32.7-33.3-32.7zM320 348.6c0 9.3-6.9 18.4-16.3 18.4h-221c-9.4 0-18.7-9.1-18.7-18.4V160.7c0-9.3 9-15.5 18.4-15.5l221 .1c9.4 0 16.6 6.1 16.6 15.4v187.9zM367 213v85.6l98 53.4V160l-98 53zm81-23v132.3l-64-33.5v-65.6l64.1-33.6-.1.4z' })
      )
    )
  );
};

exports.default = Icon;
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
        _react2.default.createElement('path', { d: 'M453.594 100L421.24 60.703C415.47 52.627 405.084 48 394.665 48h-277.33c-10.415 0-20.8 4.627-26.575 12.702l-32.352 39.3C51.468 106.92 48 117.334 48 128.885v288.89C48 443.2 68.8 464 94.225 464h323.553C443.202 464 464 443.2 464 417.775v-288.89c0-11.55-3.463-21.962-10.406-28.884zM256 383.11L128.89 256h80.89v-46.224h92.443V256h80.89L256 383.11zM96.534 94.22l18.486-23.11h277.33l21.966 23.11H96.534z' })
      )
    )
  );
};

exports.default = Icon;
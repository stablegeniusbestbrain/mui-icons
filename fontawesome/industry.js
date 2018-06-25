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
      _react2.default.createElement('path', { d: 'M6 0q.3 0 .6.3t.3.6v11.9L14 7q.3-.1.6-.1t.6.2.2.6v5.1L22.6 7q.2-.1.5-.1.4 0 .6.2t.3.6v15.4q0 .4-.3.6t-.6.3H.9q-.4 0-.6-.3t-.3-.6V.9Q0 .5.3.3T.9 0H6z' })
    )
  );
};

exports.default = Icon;
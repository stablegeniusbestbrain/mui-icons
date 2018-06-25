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
      _react2.default.createElement('path', { d: 'M6.8 4.8L5 3 3.5 4.5l1.8 1.8 1.5-1.5zM4 10.5H1v2h3v-2zm9-9.9h-2v2.9h2V.6zm7.4 3.9L19 3.1l-1.7 1.7 1.4 1.5 1.7-1.8zm-3.2 13.7L19 20l1.4-1.4-1.8-1.8-1.4 1.4zm2.8-7.7v2h3v-2h-3zm-8-5c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-1 16.9h2v-2.9h-2v2.9zm-7.5-3.9L5 19.9l1.8-1.8-1.5-1.4-1.8 1.8z' })
    )
  );
};

exports.default = Icon;
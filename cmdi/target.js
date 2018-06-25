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
      _react2.default.createElement('path', { d: 'M11 2v2.1c-3.6.4-6.5 3.3-6.9 6.9H2v2h2.1c.4 3.6 3.3 6.5 6.9 6.9V22h2v-2.1c3.6-.4 6.5-3.3 6.9-6.9H22v-2h-2.1c-.4-3.6-3.3-6.5-6.9-6.9V2m-2 4.1V8h2V6.1c2.5.4 4.5 2.4 4.9 4.9H16v2h1.9c-.4 2.5-2.4 4.5-4.9 4.9V16h-2v1.9c-2.5-.4-4.5-2.4-4.9-4.9H8v-2H6.1c.4-2.5 2.4-4.5 4.9-4.9zm1 4.9c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;
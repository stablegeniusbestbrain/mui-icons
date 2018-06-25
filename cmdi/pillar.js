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
      _react2.default.createElement('path', { d: 'M6 5h12c.6 0 1 .4 1 1s-.4 1-1 1H6c-.6 0-1-.4-1-1s.4-1 1-1zm15-3v2H3V2h18zm-6 6h2v14h-2V8zM7 8h2v14H7V8zm4 0h2v14h-2V8z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M14 4c0-1.1-.9-2-2-2s-2 .9-2 2v12h4V4zm5 4c0-1.1-.9-2-2-2s-2 .9-2 2v8h4V8zM9 11c0-1.1-.9-2-2-2s-2 .9-2 2v5h4v-5zm10 8H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;
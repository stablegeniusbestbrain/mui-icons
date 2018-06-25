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
      _react2.default.createElement('path', { d: 'M2 2h4v2H4v16h2v2H2V2zm18 2h-2V2h4v20h-4v-2h2V4zM9 5h1v5h1v1H8v-1h1V6l-1 .5v-1L9 5zm6 8h1v5h1v1h-3v-1h1v-4l-1 .5v-1l1-.5zm-6 0c1.1 0 2 1.3 2 3s-.9 3-2 3-2-1.3-2-3 .9-3 2-3zm0 1c-.6 0-1 .9-1 2s.4 2 1 2 1-.9 1-2-.4-2-1-2zm6-9c1.1 0 2 1.3 2 3s-.9 3-2 3-2-1.3-2-3 .9-3 2-3zm0 1c-.6 0-1 .9-1 2s.4 2 1 2 1-.9 1-2-.4-2-1-2z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M1 4.3L2.3 3 21 21.7 19.7 23 17 20.3v.7h-2v-2h.7L5 8.3V9H3V7h.7L1 4.3zM20 3c.6 0 1 .4 1 1v1h-2V3h1zm-5 2V3h2v2h-2zm-4 0V3h2v2h-2zM7 5V3h2v2H7zm4 16v-2h2v2h-2zm-4 0v-2h2v2H7zm-3 0c-.6 0-1-.4-1-1v-1h2v2H4zm-1-6h2v2H3v-2zm18 0v2h-2v-2h2zM3 11h2v2H3v-2zm18 0v2h-2v-2h2zm0-4v2h-2V7h2z' })
    )
  );
};

exports.default = Icon;
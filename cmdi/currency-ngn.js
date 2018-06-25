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
      _react2.default.createElement('path', { d: 'M4 9h2V3h2l3.4 6H16V3h2v6h2v2h-2v2h2v2h-2v6h-2l-3.4-6H8v6H6v-6H4v-2h2v-2H4V9zm4 0h1.1L8 7v2zm0 2v2h3.4l-1.1-2H8zm8 6v-2h-1.2l1.2 2zm-3.4-6l1.1 2H16v-2h-3.4z' })
    )
  );
};

exports.default = Icon;
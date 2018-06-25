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
      _react2.default.createElement('path', { d: 'M9.8 13.4h2.5c1.5 0 2.2-.3 2.8-.8.6-.6.9-1.4.9-2.4 0-.9-.2-1.7-.9-2.3-.7-.6-1.3-.9-2.8-.9H8v10h1.8v-3.6zM19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14zm-9.2 9V8.4h2.3c.7 0 1.2.2 1.5.6.3.3.5.7.5 1.2 0 .6-.2 1-.5 1.3-.3.3-.7.5-1.4.5H9.8z' })
    )
  );
};

exports.default = Icon;
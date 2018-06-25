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
      _react2.default.createElement('path', { d: 'M19 15V3h4v12h-4zM15 3c1.1 0 2 .9 2 2v10c0 .5-.2 1.1-.6 1.4L9.8 23l-1-1.1c-.3-.2-.5-.6-.5-1l.1-.3.9-4.6H3c-1.1 0-2-.9-2-2v-2c0-.3.1-.5.1-.7l3.1-7.1C4.5 3.5 5.2 3 6 3h9zm0 2H6l-3 7v2h8.8l-1.1 5.3L15 15V5z' })
    )
  );
};

exports.default = Icon;
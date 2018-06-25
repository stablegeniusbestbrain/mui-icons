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
      _react2.default.createElement('path', { d: 'M19.1 4L12 11.1l7.1 7.2q.3.2.3.6t-.3.6l-2.2 2.2q-.3.2-.6.2t-.6-.2l-10-10q-.2-.2-.2-.6t.2-.6l10-9.9q.2-.3.6-.3t.6.3l2.2 2.2q.3.3.3.6t-.3.6z' })
    )
  );
};

exports.default = Icon;
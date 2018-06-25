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
      _react2.default.createElement('path', { d: 'M-3.4 20.1V12h30.8v8.1q0 .9-.6 1.6t-1.5.6H-1.3q-.9 0-1.5-.6t-.6-1.6zm8.5-3v1.8h5.2v-1.8H5.1zm-5.1 0v1.8h3.4v-1.8H0zM25.3 1.7q.9 0 1.5.6t.6 1.6v3H-3.4v-3q0-.9.6-1.6t1.5-.6h26.6z' })
    )
  );
};

exports.default = Icon;
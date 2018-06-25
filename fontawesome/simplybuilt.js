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
      _react2.default.createElement('path', { d: 'M9.8 13.8q0-1.5-1-2.5t-2.6-1.1-2.5 1.1-1.1 2.5 1.1 2.6 2.5 1 2.6-1 1-2.6zm11.6 0q0-1.5-1.1-2.5t-2.5-1.1-2.6 1.1-1 2.5q0 1.5 1 2.6t2.6 1 2.5-1 1.1-2.6zM25.7 3v18q0 .6-.4 1t-1 .5H-.3q-.6 0-1-.5t-.4-1V3q0-.6.4-1t1-.5h5.8q.6 0 1 .5T7 3v2.1h10V3q0-.6.5-1t1-.5h5.8q.6 0 1 .5t.4 1z' })
    )
  );
};

exports.default = Icon;
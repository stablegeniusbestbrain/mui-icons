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
      _react2.default.createElement('path', { d: 'M13.2 12.8l.2 9.5q-.8-.2-1.4-.2-.6 0-1.4.2l.2-9.5q-.6-.9-2.3-3.9T5.6 3.8 3.2 0q.8.2 1.4.2.6 0 1.5-.2.9 1.5 1.8 3.1t2.2 3.7 1.9 3l1.5-2.4q1-1.6 1.5-2.5t1.4-2.4T17.9 0q.7.2 1.4.2t1.5-.2q-.3.5-.8 1.2t-.6 1-.8 1.3-.7 1.1Q16 8 13.2 12.8z' })
    )
  );
};

exports.default = Icon;
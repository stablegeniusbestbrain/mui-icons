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
      _react2.default.createElement('path', { d: 'M20 17.7q0 .5-.4.9l-1.8 1.8q-.4.4-1 .4t-.9-.4L12 16.5l-3.9 3.9q-.4.4-.9.4t-1-.4l-1.8-1.8q-.4-.4-.4-.9t.4-.9l4-3.9-4-4Q4 8.5 4 8t.4-.9l1.8-1.8q.4-.4 1-.4t.9.4L12 9.2l3.9-3.9q.4-.4.9-.4t1 .4l1.8 1.8q.4.4.4.9t-.4.9l-4 4 4 3.9q.4.4.4.9z' })
    )
  );
};

exports.default = Icon;
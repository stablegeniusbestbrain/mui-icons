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
      _react2.default.createElement('path', { d: 'M13 5.8l1.9 1.9-1.6 1.6 1.4 1.4 3-3L12 2h-1v5l2 2V5.8zM5.4 4L4 5.4l6.6 6.6L5 17.6 6.4 19l4.6-4.6V22h1l4.3-4.3 2.3 2.3 1.4-1.4L5.4 4zM13 18.2v-3.8l1.9 1.9-1.9 1.9z' })
    )
  );
};

exports.default = Icon;
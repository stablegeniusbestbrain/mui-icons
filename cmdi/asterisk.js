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
      _react2.default.createElement('path', { d: 'M10 2h4l-.8 7.9 6.5-4.6 2 3.4-7.3 3.3 7.3 3.3-2 3.4-6.5-4.6.8 7.9h-4l.8-7.9-6.5 4.6-2-3.4L9.6 12 2.3 8.7l2-3.4 6.5 4.6L10 2z' })
    )
  );
};

exports.default = Icon;
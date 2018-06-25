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
      _react2.default.createElement('path', { d: 'M12 14.6l4.3 3.6 1.9-1.3v1.4L12 22l-6.2-3.7v-1.4l1.9 1.3 4.3-3.6zM7.7 2.5L12 6.1l4.3-3.6 6.2 4-4.3 3.4 4.3 3.5-6.2 4-4.3-3.6-4.3 3.6-6.2-4 4.3-3.5-4.3-3.4 6.2-4zM12 13.7l6.1-3.8L12 6.2 5.9 9.9l6.1 3.8z' })
    )
  );
};

exports.default = Icon;
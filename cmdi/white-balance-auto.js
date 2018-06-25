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
      _react2.default.createElement('path', { d: 'M10.3 16l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9M22 7l-1.2 6.3L19.3 7h-1.6l-1.5 6.3L15 7h-.8C12.8 5.2 10.5 4 8 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.1 0 5.8-1.8 7.2-4.4v.4H17l1.5-6.1L20 16h1.8l2-9M6.9 12.6h2.3L8 9l-1.2 3.6z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement('path', { d: 'M12 21.4L10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3c.7 0 1.3.1 1.9.3l3.6 6-4 5 3 7.1zM16.5 3C19.6 3 22 5.4 22 8.5c0 3.8-3.4 6.9-8.6 11.5L12 21.4l-1-7 4.5-5-2.6-5.1c1-.8 2.3-1.3 3.6-1.3z' })
    )
  );
};

exports.default = Icon;
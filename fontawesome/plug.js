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
      _react2.default.createElement('path', { d: 'M23.5 6.1q.5.5.5 1.2t-.5 1.2l-5.4 5.3 2 2.1L18 18q-2.2 2.2-5.2 2.5t-5.5-1.3L2.4 24H0v-2.4l4.8-4.9q-1.6-2.5-1.3-5.5T6 6l2.1-2.1 2.1 2L15.5.5Q16 0 16.7 0t1.2.5.5 1.2-.5 1.2l-5.3 5.4 3.1 3.1 5.4-5.3q.5-.5 1.2-.5t1.2.5z' })
    )
  );
};

exports.default = Icon;
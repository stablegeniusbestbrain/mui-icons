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
      _react2.default.createElement('path', { d: 'M19.3 12q0-2.2-1.2-4L8 18.1q1.9 1.2 4 1.2 1.5 0 2.8-.6t2.4-1.6 1.5-2.3.6-2.8zM5.9 16L16 5.9q-1.8-1.3-4-1.3-2 0-3.7 1T5.7 8.3t-1 3.7q0 2.1 1.2 4zm16.4-4q0 2.1-.8 4t-2.2 3.3-3.3 2.2-4 .8-4-.8-3.3-2.2T2.5 16t-.8-4 .8-4.1 2.2-3.2T8 2.5t4-.9 4 .9 3.3 2.2 2.2 3.2.8 4.1z' })
    )
  );
};

exports.default = Icon;
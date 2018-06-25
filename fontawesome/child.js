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
      _react2.default.createElement('path', { d: 'M19.3 7.3l-3.9 4v11q0 .6-.4 1t-1.1.5-1-.5-.5-1v-5.2h-.8v5.2q0 .6-.5 1t-1 .5-1.1-.5-.4-1v-11l-3.9-4q-.4-.3-.4-.9t.4-.9.9-.4.9.4l3 3.1h5l3-3.1q.4-.4.9-.4t.9.4.4.9-.4.9zM15 5.1q0 1.3-.9 2.2t-2.1.8-2.1-.8T9 5.1 9.9 3t2.1-.9 2.1.9.9 2.1z' })
    )
  );
};

exports.default = Icon;
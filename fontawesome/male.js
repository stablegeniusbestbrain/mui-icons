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
      _react2.default.createElement('path', { d: 'M18.9 9.4V15q0 .5-.4.9t-.9.4-.9-.4-.4-.9v-4.7h-.9v12.2q0 .6-.4 1.1t-1.1.4-1-.4-.5-1.1v-6.2h-.8v6.2q0 .6-.5 1.1t-1 .4-1.1-.4-.4-1.1V10.3h-.9V15q0 .5-.4.9t-.9.4-.9-.4-.4-.9V9.4q0-1 .8-1.8t1.8-.7h8.6q1.1 0 1.8.7t.8 1.8zm-3.9-6q0 1.3-.9 2.2t-2.1.8-2.1-.8T9 3.4t.9-2.1T12 .4t2.1.9.9 2.1z' })
    )
  );
};

exports.default = Icon;
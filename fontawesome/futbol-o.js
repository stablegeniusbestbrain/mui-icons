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
      _react2.default.createElement('path', { d: 'M8.2 10.9L12 8.1l3.8 2.8-1.4 4.5H9.6zM12 0q2.4 0 4.7 1t3.8 2.5T23 7.3t1 4.7-1 4.7-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0zm8.3 18.1q2-2.7 2-6.1l-1.4 1.2-3.2-3 .8-4.4 1.8.2q-2-2.8-5.2-3.8l.7 1.7L12 6 8.2 3.9l.7-1.7Q5.7 3.2 3.7 6l1.8-.2.8 4.4-3.2 3L1.7 12q0 3.4 2 6.1l.4-1.8 4.4.5 1.8 4-1.5 1q1.6.5 3.2.5t3.2-.5l-1.5-1 1.8-4 4.4-.5z' })
    )
  );
};

exports.default = Icon;
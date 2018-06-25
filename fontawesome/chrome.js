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
      _react2.default.createElement('path', { d: 'M12 0q3.2 0 6 1.6 3.1 1.8 4.7 5l-9.9-.5q-2.2-.2-4 1t-2.4 3L2.7 4.5q1.7-2.2 4.1-3.3T12 0zM2 5.4l4.5 8.9q.9 1.9 2.8 2.9t3.9.6l-3.1 6.1q-2.8-.5-5.1-2.2t-3.7-4.2T0 12q0-3.6 2-6.6zm21.2 2.3q.8 2 .8 4.1t-.7 4.1-2 3.7-3.3 2.8q-3.1 1.8-6.7 1.6l5.5-8.4q1.1-1.7 1.1-3.8T16.4 8zM12 8q1.7 0 2.9 1.1T16 12t-1.1 2.9T12 16t-2.9-1.1T8 12t1.1-2.9T12 8z' })
    )
  );
};

exports.default = Icon;
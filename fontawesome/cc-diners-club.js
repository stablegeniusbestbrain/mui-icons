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
      _react2.default.createElement('path', { d: 'M8.1 16.6V7.3q-1.5.6-2.3 1.9T4.9 12t.9 2.8 2.3 1.8zm6.7-4.6q0-1.6-.9-2.8t-2.3-1.9v9.3q1.4-.5 2.3-1.8t.9-2.8zm2.9 0q0 2.1-1.1 3.9t-2.8 2.9-4 1q-1.5 0-3-.6t-2.5-1.7T2.6 15 2 12q0-2.1 1-4t2.9-2.8 3.9-1.1 4 1.1T16.6 8t1.1 4zm5.1.1q0-1.9-.7-3.5t-2-2.8-2.9-1.7-3.3-.7H9.8q-2.3 0-4.3 1.1T2.4 7.6t-1.2 4.5q0 2.3 1.1 4.2t3.2 3.1 4.3 1.2h4.1q1.7 0 3.3-.7t2.9-1.8 2-2.7.7-3.3zm4.6-8.7v17.2q0 .7-.5 1.2t-1.2.5H-1.7q-.7 0-1.2-.5t-.5-1.2V3.4q0-.7.5-1.2t1.2-.5h27.4q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;
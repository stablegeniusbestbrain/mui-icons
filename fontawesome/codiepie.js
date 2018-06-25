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
      _react2.default.createElement('path', { d: 'M20.7 9.1q.8 0 1.2.4t.4 1.1-.5 1.1-1.2.4h-1.8v2.3h-.3V9.1h2.2zm2.2 7.9l-.1.1v.2q-1.5 3.1-4.4 4.9T12 24q-2.4 0-4.7-1t-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0q3.3 0 6.1 1.7t4.4 4.5l.1.3-1.8.9-2.2 1.1q-.1 0-6.4 3.6 5.1 2.4 10.7 4.9zM12 23.7q3.3 0 6.2-1.8t4.3-4.8l-3.8-1.7q-1 1.9-2.8 3T12 19.5q-2 0-3.7-1t-2.8-2.7-1-3.8 1-3.7 2.8-2.8 3.7-1 3.8 1 2.7 2.7l3.7-1.9q-1.5-2.8-4.3-4.4T12 .3q-1.6 0-3.1.4T6.1 1.9 3.7 3.7 1.9 6.1.7 8.9.3 12t.4 3.1 1.2 2.8 1.8 2.4 2.4 1.8 2.8 1.2 3.1.4z' })
    )
  );
};

exports.default = Icon;
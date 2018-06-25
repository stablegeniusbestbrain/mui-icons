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
      _react2.default.createElement('path', { d: 'M23.6 5.3l2.1 17q-1.7 0-3.4-.8-2.7-1.2-5.3-1.2-3 0-5 2-2-2-5-2-2.6 0-5.3 1.2-1.7.8-3.3.8h-.1l2.1-17q3-1.8 6.4-1.8Q9.9 3.5 12 5q2.1-1.5 5.2-1.5 3.4 0 6.4 1.8zM17 18.5q1.7 0 3.1.4t3.5 1.2L21.9 6.4q-2.3-1-4.9-1-3 0-5 1.9-2-1.9-5-1.9-2.6 0-4.9 1L.4 20.1q1.4-.6 2.2-.9t2-.5 2.4-.2q2.7 0 5 1.4 2.3-1.4 5-1.4zm.5-.5l-.7-12.1q-2.8 0-4.8 2-2-2-5-2-2.4 0-4.5.9L1 19.4q1.6-.7 3-1.1t3-.3q2.8 0 5 1.4 2.3-1.5 5-1.4z' })
    )
  );
};

exports.default = Icon;
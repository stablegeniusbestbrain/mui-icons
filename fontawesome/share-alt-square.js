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
      _react2.default.createElement('path', { d: 'M18.9 16q0-1.2-.9-2t-2-.9q-1.1 0-1.9.8l-3.3-1.6q.1-.2.1-.3t-.1-.3l3.3-1.6q.8.8 1.9.8 1.2 0 2-.9t.9-2-.9-2-2-.9-2 .9-.9 2q0 .1.1.3L9.9 9.9q-.8-.8-1.9-.8-1.2 0-2 .9t-.9 2 .9 2 2 .9q1.1 0 1.9-.8l3.3 1.6q-.1.2-.1.3 0 1.2.9 2t2 .9 2-.9.9-2zm3.4-10.4v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;
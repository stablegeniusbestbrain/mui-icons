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
      _react2.default.createElement('path', { d: 'M15.7 13.7q0 .8-.5 1.4t-1.2.6q-.6 0-.9-.2v-3.7q.3-.2.9-.2.7 0 1.2.6t.5 1.5zm-4.6-5.8q0 .9-.5 1.5t-1.2.6q-.6 0-.9-.2V6.1q.3-.2.9-.2.7 0 1.2.6t.5 1.4zm7.6 5.8q0-1.8-1.2-3.1t-2.9-1.2h-.5q-.3 1-1 1.8-1.2 1.3-2.9 1.4v8.5l2.9-.6v-2.7q.6.2 1.5.2 1.7 0 2.9-1.2t1.2-3.1zM14.1 8q0-1.8-1.2-3.1T10 3.6q-1 0-1.9.5H5.6v11.3l2.9-.6v-2.7q.7.2 1.5.2 1.7 0 2.9-1.3t1.2-3zm8.2-2.4v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;
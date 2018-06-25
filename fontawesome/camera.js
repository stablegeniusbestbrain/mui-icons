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
      _react2.default.createElement('path', { d: 'M12 9q1.6 0 2.7 1.1t1.2 2.8-1.2 2.7-2.7 1.1-2.7-1.1-1.2-2.7 1.2-2.8T12 9zm9.4-5.6q1.4 0 2.5 1t1 2.5v12q0 1.4-1 2.4t-2.5 1H2.6q-1.4 0-2.5-1t-1-2.4v-12q0-1.5 1-2.5t2.5-1h3l.7-1.8q.2-.6.9-1.1T8.6 0h6.8q.7 0 1.4.5t.9 1.1l.7 1.8h3zM12 18.9q2.5 0 4.2-1.8t1.8-4.2-1.8-4.3T12 6.9 7.8 8.6 6 12.9t1.8 4.2 4.2 1.8z' })
    )
  );
};

exports.default = Icon;
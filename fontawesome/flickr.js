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
      _react2.default.createElement('path', { d: 'M18.4 1.7q1.6 0 2.8 1.1t1.1 2.8v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8zM11.1 12q0-1.2-.9-2t-2-.8-2 .8-.8 2 .8 2 2 .8 2-.8.9-2zm7.5 0q0-1.2-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .8 2-.8.8-2z' })
    )
  );
};

exports.default = Icon;
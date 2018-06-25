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
      _react2.default.createElement('path', { d: 'M12 14c-1 0-3 1-3 2 0 2 3 2 3 2v-1c-.6 0-1-.4-1-1s.4-1 1-1v-1zm0 5s-4-.5-4-2.5c0-3 3-3.7 4-3.7v-1.3c-1 0-5 1.5-5 4.5 0 4 5 4 5 4v-1zM10.1 7l1.2.6c.4-2.5 1.5-4.1 1.5-4.1-.4 1-.7 1.9-.9 2.6C13.2 3.5 15.6 2 15.6 2c-1.2 1.2-2 2.5-2.6 3.5 1.6-1.7 3.7-2.7 3.7-2.7-2.6 1.7-3.9 4.4-4.2 5.2h.6c0 .6 0 1 .2 1.4.8 1.9 4.7 2.1 4.7 6.6s-4 6-6.2 6C9.7 22 5 21 5 16s4.9-5.1 5.8-7.1c.2-.4-.7-1.9-.7-1.9z' })
    )
  );
};

exports.default = Icon;
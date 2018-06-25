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
      _react2.default.createElement('path', { d: 'M4 4v10h2v-4h2l5.4 5.4L9.8 19l1.4 1.4 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6 3.6-3.6-1.4-1.4-3.6 3.6-4-4h.2c1.7 0 3-1.3 3-3s-1.3-3-3-3H4zm2 2h5c.6 0 1 .4 1 1s-.4 1-1 1H6V6z' })
    )
  );
};

exports.default = Icon;
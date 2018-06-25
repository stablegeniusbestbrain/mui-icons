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
      _react2.default.createElement('path', { d: 'M7.1 11L7 12l.1 1h10.2l-.8 2H7.7c1.1 2.4 3.5 4 6.3 4 2.2 0 4.2-1 5.5-2.7v2.8C18 20.3 16.1 21 14 21c-3.9 0-7.3-2.5-8.5-6H2l1-2h2.1L5 12l.1-1H2l1-2h2.5c1.2-3.5 4.6-6 8.5-6 2.5 0 4.8 1 6.4 2.7l-.8 2.1C18.3 6.1 16.3 5 14 5c-2.8 0-5.2 1.6-6.3 4H19l-.8 2H7.1z' })
    )
  );
};

exports.default = Icon;
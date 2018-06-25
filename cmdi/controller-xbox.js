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
      _react2.default.createElement('path', { 'stroke-width': '.2', 'stroke-linejoin': 'round', stroke: '#fff', d: 'M12 6.1c1.7 0 6.7-4.4 9.3.8 2.6 5.2 1.9 12.1.2 12.1-4.3 0-1.7-4.3-9.5-4.3S6.8 19 2.5 19c-1.7 0-2.4-6.9.2-12.1 2.6-5.2 7.6-.8 9.3-.8zm0 1.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;
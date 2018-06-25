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
      _react2.default.createElement('path', { d: 'M19 21.9H4v-6.5H1.9V24h19.2v-8.6H19v6.5zM6.4 14.8l.4-2.1 10.5 2.2-.5 2.1zm1.3-5l.9-1.9 9.7 4.5-.8 2zm2.7-4.7l1.4-1.7 8.2 6.9-1.3 1.6zM15.8 0l6.3 8.6-1.7 1.3L14 1.3zM6.1 19.7v-2.1h10.7v2.1H6.1z' })
    )
  );
};

exports.default = Icon;
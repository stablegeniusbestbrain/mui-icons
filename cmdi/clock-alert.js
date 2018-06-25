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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c2.3 0 4.3-.8 6-2v-2.7c-1.5 1.6-3.6 2.7-6 2.7-4.4 0-8-3.6-8-8s3.6-8 8-8c3.4 0 6.2 2.1 7.4 5h2.1c-1.2-4.1-5-7-9.5-7zm-1 5v6l5.2 3.1.8-1.2-4.5-2.7V7H11zm9 4v7h2v-7h-2zm0 9v2h2v-2h-2z' })
    )
  );
};

exports.default = Icon;
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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M440 64H328c-4.4 0-8 3.6-8 8s3.6 8 8 8h92L80 419.9V328c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-4-8-8.4-8H92L432 92v92c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8z' })
      )
    )
  );
};

exports.default = Icon;
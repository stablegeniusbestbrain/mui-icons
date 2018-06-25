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
        _react2.default.createElement('path', { d: 'M390.4 121.9L384 32 32 56l23.3 319.9 22.2-1.6-5.5 78.9L456 480l24-352-89.6-6.1zm-321.2 237L49.1 71.6l320.2-22.4 5 71.6-16.1-1.1-3.7-53.5L67.1 86.4l15.3 218.2-3.8 53.6-9.4.7zm371.4 104L88.1 438.3 110.4 119l352.5 24.6-22.3 319.3z' }),
        _react2.default.createElement('path', { d: 'M126.3 136.2l-15.6 223.5L430.2 382l15.6-223.5-319.5-22.3zm42.8 211.5l77.5-95.1L310 357.5l-140.9-9.8zm160.5 11.2l-23.2-38.3 24.5-30 43.2 71.4-44.5-3.1zm47.8-141c-.6 8.8-8.3 15.5-17.1 14.8s-15.5-8.3-14.9-17.1c.6-8.8 8.3-15.5 17.1-14.8 8.9.6 15.6 8.3 14.9 17.1z' })
      )
    )
  );
};

exports.default = Icon;
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
        _react2.default.createElement('path', { d: 'M384 144H80c-17.6 0-32 14.4-32 32v160c0 17.6 14.4 32 32 32h304c17.6 0 32-14.4 32-32V176c0-17.6-14.4-32-32-32zm16 192c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h304c8.8 0 16 7.2 16 16v160z' }),
        _react2.default.createElement('path', { d: 'M370 176H94c-8.8 0-14 5.2-14 14v132c0 8.8 5.2 14 14 14h276c8.8 0 14-5.2 14-14V190c0-8.8-5.2-14-14-14zM218.8 308l8.4-43H200l45.2-61-8.4 43H264l-45.2 61zM432 200.6v110.8c19.1-11.1 32-31.7 32-55.4s-12.9-44.3-32-55.4z' })
      )
    )
  );
};

exports.default = Icon;
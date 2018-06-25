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
        _react2.default.createElement('path', { d: 'M290.4 145L227 96l63.6 102.2z' }),
        _react2.default.createElement('path', { d: 'M329 96v163h-36.4l-63.2-98.6 1.7 98.6H191V152l-37.3-29.3c1 1.2 2 2.4 2.9 3.7 10 13.9 15 30.5 15 50.5 0 49.2-30.6 82.1-76.9 82.1H32v.4L231.6 416H480V214.1L329 96z' }),
        _react2.default.createElement('path', { d: 'M129.9 178.1c0-29-14.2-45.1-39.7-45.1H71v89h19c26 0 39.9-15.4 39.9-43.9z' })
      )
    )
  );
};

exports.default = Icon;